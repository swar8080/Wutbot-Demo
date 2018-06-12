import React from 'react';
import { commentCountBySynset, commentsForSynset } from '../../service/wutbotComments';
import formatSearchResults from '../../logic/formatSearchResults';
import formatCommentResults from '../../logic/formatCommentResults';
import WutbotCommentViewer from './WutbotCommentViewer';
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
        <div>
            <div className='comment-viewer-app__info'>
                <h3 className='comment-viewer-app__info__heading'>Word-sense Disambiguation Demo (Reddit Comments)</h3>
                <p className='comment-viewer-app__info__details'>Search for reddit comments that the bot has interpreted to contain a specific synset (topic).</p>
            </div>
            <div className='section-divider'/>
            <WutbotCommentViewer
                fetchCommentCountBySynset={fetchCommentCountCallback}
                fetchCommentsForSynset={fetchCommentsCallback}
            />
        </div>
    );
  }
}

export default CommentViewerApp;
