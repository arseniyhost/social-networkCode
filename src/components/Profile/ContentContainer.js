import React from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { setProfile, getStatus } from './../../Redux/profilePage-reducer';
import { compose } from 'redux';
import { getProfile, getAuthorizedUserId } from '../../Redux/selectors/selectors';

class ContentContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 4999;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Content {...this.props} isOwner={!this.props.match.params.userId} profile={this.props.profile}
                updateStatus={this.props.updateStatus} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        authorizedUserId: getAuthorizedUserId(state)
    }
};

export default compose(
    connect(mapStateToProps, { setProfile, getStatus }),
    withRouter
)(ContentContainer);
