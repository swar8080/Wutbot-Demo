import React from 'react';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import './SubredditTopicFetchResult.css';

export default function SubredditTopicFetchResult(props){

    let content = null;
    if (props.loading){
        const loadingMessage = `Analyzing posts from r/${props.subreddit}...`;
        content = <LoadingSpinner message={loadingMessage}/>
    }
    else if (props.error){
        content = <ErrorMessage message='Error loading topics'/>
    }
    else if (!props.result){
        return null;
    }
    else if (!props.result.isValidSubreddit){
        const errorMessage = `The subreddit r/${props.subreddit} does not exist`;
        content = <ErrorMessage message={errorMessage}/>
    }
    else {
        content = <SubredditTopicSummary topics={props.result.topics}/>
    }

    return (
        <div className={'subreddit-topic-fetch-result'}>
            {content}
        </div>
    )

}

function SubredditTopicSummary(props){
    const rows = props.topics.map((topic) => {
        const synset = topic.synset || 'N/A';
        const gloss = topic.gloss || 'N/A';
        const linIC = (topic.linIC && topic.linIC.toFixed(3)) || 'N/A';

        return (
            <tr className='subreddit-topic-summary__table__row' key={topic.lemma}>
                <td>{topic.lemma}</td>
                <td>{synset}</td>
                <td>{gloss}</td>
                <td>{linIC}</td>
            </tr>
        );
    });

   return (
       <div className='subreddit-topic-summary'>
          <table className='subreddit-topic-summary__table'>
              <tbody>
                  <tr className='subreddit-topic-summary__table__headings'>
                       <th>Topic</th>
                       <th>Synset</th>
                       <th>Synset Meaning</th>
                       <th>Synset Similarity Score</th>
                   </tr>
                   {rows}
              </tbody>
          </table>
       </div>

   );

}