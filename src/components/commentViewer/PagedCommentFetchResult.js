import React from 'react';
import PagedNavigation from './PagedNavigation';
import RedditComment from './RedditComment';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import './PagedCommentFetchResult.css';

class PagedCommentFetchResult extends React.Component{

    constructor(props){
        super(props);
        this.state = { commentIndex: 0 };
    }

    onDisplayComment = (commentIndex) => {
      this.setState({commentIndex});
    };

    static getDerivedStateFromProps(props, state){
        if ((!props.comments || !props.comments.length)
            && state.commentIndex !== 0){

            state.commentIndex = 0;
            return state;
        }
        else {
            return null;
        }
    }

    render(){
        if (this.props.loading)
            return <LoadingComments/>;
        else if (this.props.error)
            return <ErrorLoadingComments/>
        else if (!this.props.comments || !this.props.comments.length)
            return null;

        const comment = this.props.comments[this.state.commentIndex];
        return (
            <div className={'paged-reddit-comments'}>
                <p className={'paged-reddit-comments__heading'}>Reddit comments for {this.props.synset}:</p>
                <div className={'paged-reddit-comments__comment-container'}>
                    <RedditComment {...comment}/>
                </div>
                <div className={'paged-reddit-comments__nav-container'}>
                    <PagedNavigation
                        itemIndex={this.state.commentIndex}
                        itemCount={this.props.comments.length}
                        onPageChange={(i) => this.onDisplayComment(i)}
                    />
                </div>
            </div>
        );
    }
}
export default PagedCommentFetchResult;

function LoadingComments(props){
    return <LoadingSpinner/>;
}

function ErrorLoadingComments(props){
    return <ErrorMessage message='Error loading comments'/>;
}

