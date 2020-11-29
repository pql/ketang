import React, { PropsWithChildren } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import './index.less';
import { History } from 'history';
type Props = PropsWithChildren<{
    history: History
}>
function Nav(props: Props) {
    return (
        <nav className="nav-header">
            <i>
                <LeftOutlined onClick={() => props.history.goBack()}/>
            </i>
            {props.children}
        </nav>
    )
}
export default Nav;