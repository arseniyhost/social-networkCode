import React from 'react';
import News from './News';
import { connect } from 'react-redux';
import { setAllNewsContentThunk, getCurrentNewThunk } from './../../Redux/newsPage-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class NewsContainer extends React.Component {
    componentDidMount() {
       this.props.setAllNewsContentThunk();
    }

    onPageNewContent = (pageNumber) => {
        this.props.getCurrentNewThunk(pageNumber);
    }

    render() {
    
        return (
            <div>
                <News {...this.props} news={this.props.news} title={this.props.title} onPageNewContent={this.onPageNewContent} />
            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        title: state.newsPage.title,
        id: state.newsPage.news.id,
    }
}

export default compose(
    connect(mapStateToProps, { setAllNewsContentThunk, getCurrentNewThunk }),
    withAuthRedirect
)(NewsContainer);
