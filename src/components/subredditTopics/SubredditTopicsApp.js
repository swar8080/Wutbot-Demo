import React from 'react';
import topicsForSubreddit from '../../service/subredditTopics';
import formatSubredditTopicsResults from '../../logic/formatSubredditTopicsResults';
import SubredditTopicsViewer from './SubredditTopicsViewer';

export default function SubredditTopicsApp(){

    const fetchTopicsCallback = (subreddit, postType) => {
      return topicsForSubreddit(subreddit, postType).then(formatSubredditTopicsResults);
    };

    return (
      <SubredditTopicsViewer
          fetchTopicsForSubreddit={fetchTopicsCallback}
      />
    );
}

