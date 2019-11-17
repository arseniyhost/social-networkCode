import { addPost, } from '../../../Redux/profilePage-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}
export const MyPostContainer = connect(mapStateToProps, { addPost })(MyPost);