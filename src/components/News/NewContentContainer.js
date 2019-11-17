import React from 'react';
import NewContent from './NewContent';
import { connect } from 'react-redux';
import { getContentThunk } from './../../Redux/newsPage-reducer';

class NewContentContainer extends React.Component {
    componentDidMount() {
        this.props.getContentThunk(this.props.currentPage);
    }

    render()
     {
        return (
            <NewContent {...this.state} news={this.props.news} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.newContent,
        currentPage: state.newsPage.currentPage
    }
}

export default connect(mapStateToProps, { getContentThunk })(NewContentContainer);