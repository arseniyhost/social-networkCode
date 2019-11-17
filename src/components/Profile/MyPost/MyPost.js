import React from 'react';
import Post from './../Posts/Post';
import style from './MyPost.module.css';
import { reduxForm, Field } from 'redux-form';
import { maxLengthSymbols, require } from '../../../utils/validaters/validaters';
import { Textarea } from '../../common/FormControls/FormControls';

const MyPost = (props) => {
    let postElements = props.posts.map(p => <Post like={p.like} key={p.id} message={p.message} />);


    let onSubmit = (values) => {
        props.addPost(values.textPost);
    }
    
    return (
        <div className={style.profilePosts}>
            <h3>My posts</h3>
            <div className={style.createMessage}>
                <PostReduxForm onSubmit={onSubmit} />
            </div>
            <div className={style.postContainer}>
                {postElements}
            </div>
        </div>
    );
};

const maxLength = maxLengthSymbols(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.postText}>
                <Field name="textPost" validate={[require, maxLength]} component={Textarea} placeholder={"your post"} />
            </div>
            <div>
                <button className={style.postBtn}>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'post'
})(PostForm)

export default MyPost;