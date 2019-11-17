import { connect } from 'react-redux';
import FriendBlock from './FriendBlock';

let mapStateToProps = (state) => {
    return {
        friend: state.sectionFriends.friend
    }
};

let mapDispatchToProps = () => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendBlock);

export default FriendsContainer;

