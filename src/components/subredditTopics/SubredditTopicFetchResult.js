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
            <tr className='subreddit-topics__table-topic-row' key={topic.lemma}>
                <td className='subreddit-topics__topic-cell'>{topic.lemma}</td>
                <td className='subreddit-topics__topic-cell'>{synset}</td>
                <td className='subreddit-topics__topic-cell'>{gloss}</td>
                <td className='subreddit-topics__topic-cell'>{linIC}</td>
            </tr>
        );
    });

   return (
       <div className='subreddit-topics'>
          <table className='subreddit-topics__table'>
              <tbody>
                  <tr className='subreddit-topics__table-headings'>
                       <th className='subreddit-topics__heading-cell'>Topic</th>
                       <th className='subreddit-topics__heading-cell'>Synset</th>
                       <th className='subreddit-topics__heading-cell'>Synset Meaning</th>
                       <th className='subreddit-topics__heading-cell'>Synset Similarity Score</th>
                   </tr>
                   {rows}
              </tbody>
          </table>
       </div>
   );
}