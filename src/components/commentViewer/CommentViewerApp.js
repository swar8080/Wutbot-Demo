import React from 'react';
import { commentCountBySynset, commentsForSynset } from '../../service/wutbotComments';
import formatSearchResults from '../../logic/formatSearchResults';
import formatCommentResults from '../../logic/formatCommentResults';
import WutbotCommentViewer from './WutbotCommentViewer';
import SectionDivider from '../common/SectionDivider';
import './CommentViewerApp.css';

class CommentViewerApp extends React.Component {
  render() {
    const fetchCommentCountCallback = (lemma) => {
       return commentCountBySynset(lemma).then(formatSearchResults);
    };

    const fetchCommentsCallback = (synset, lemma) => {
        return commentsForSynset(synset, lemma).then(formatCommentResults);
    };

    return (
        <div className='comment-viewer-app'>
            <div className='comment-viewer-info comment-viewer-app__comment-viewer-info'>
                <h3 className='comment-viewer-info__line'>Word-sense Disambiguation Demo (Reddit Comments)</h3>
                <div className='comment-viewer-info__line'>Search for reddit comments that the bot has interpreted to contain a specific synset (topic).</div>
            </div>
            <SectionDivider/>
            <WutbotCommentViewer
                fetchCommentCountBySynset={fetchCommentCountCallback}
                fetchCommentsForSynset={fetchCommentsCallback}
            />
        </div>
    );
  }
}

export default CommentViewerApp;
