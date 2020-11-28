import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import store from '@/store/index';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import './assets/style/common.less';
import Home from '@/routes/Home/index'; // 路由组件 一个组件对应一个页面 页面组件
import Mine from '@/routes/Mine/index';
import Profile from '@/routes/Profile/index';
import { ConnectedRouter } from 'connected-react-router';
import history from '@/history';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConfigProvider locale={zh_CN}>
                <main className="main-container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/mine" exact component={Mine} />
                        <Route path="/profile" exact component={Profile} />
                    </Switch>
                </main>
            </ConfigProvider>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'))