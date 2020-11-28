import React, { useState, CSSProperties} from 'react';
import './index.less';
import { BarsOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { Transition } from 'react-transition-group';
const logo = require('../../../../assets/images/logo.jpg');
// 如果是用require加载的话，返回值的default属性才是那个图片地址
// 非要用import如何解决?
const duration = 600; // 动画的持续时间
// CSSProperties 其实就是行内样式的对象定义
const defaultStyle:CSSProperties = {
    transition: `all ${duration} ease-in-out`,
    opacity: 0,
    display: 'none'
}
// 在不同的阶段，给不同的样式
// 动画怎么来的？
const transitionStyles = {
    entering: { opacity: 0, display: 'none' },
    entered: { opacity: 1, display: 'block' },
    exiting: { opacity: 0, display: 'none' },
    exited: { opacity: 0, display: 'none'  },
    unmounted: { opacity: 0, display: 'none'  }
}

interface Props {
    currentCategory: string; // 当前选中的分类 此数据会放在redux仓库中
    setCurrentCategory: (currentCategory: string) => any; // 改变仓库中的分类
}

function HomeHeader(props: Props) {
    let [isMenuVisible, setIsMenuVisible] = useState(false);
    const setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
        let target: HTMLUListElement = event.target as HTMLUListElement;
        let category = target.dataset.category;
        props.setCurrentCategory(category);
        setIsMenuVisible(false);
    }
    return (
        <header className="home-header">
            <div className="logo-header">
                <img src={logo.default} />
                <BarsOutlined onClick={() => setIsMenuVisible(!isMenuVisible)} />
            </div>
            <Transition in={isMenuVisible} timeout={duration}>
                {
                    (state) => (
                        <ul 
                            className="category" 
                            onClick={setCurrentCategory}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            <li data-category="all" className={classnames({active: props.currentCategory === 'all' })}>全部课程</li>
                            <li data-category="react" className={classnames({active: props.currentCategory === 'react' })}>React课程</li>
                            <li data-category="vue" className={classnames({active: props.currentCategory === 'vue' })}>Vue课程</li>
                        </ul>
                    )
                }
            </Transition>
        </header>
    )
}

export default HomeHeader;

/**
 * 动画是如何实现的
 * Transition
 * 动态的给一个元素增加和删除类名，不同的类名对应不同的样式
 * 另外再加一个transition效果就可以了
 */