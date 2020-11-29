import React, { PropsWithChildren } from 'react';
import './index.less';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { CombinedState, LOGIN_TYPES } from '@/typings/state';
import { ProfileState } from '@/typings/state';
import mapDispatchToProps from '@/store/actions/profile';
import Nav from '@/components/Nav';
type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>;
function Profile(props: Props) {
    let content;
    if(props.loginState === LOGIN_TYPES.UN_VALIDATE) {
        content = null;
    }
    return (
        <section>
            <Nav history={props.history}>个人中心</Nav>
            {content}
        </section>
    )
}
const mapStateToProps = (state: CombinedState): ProfileState => state.profile;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);