import React from 'react';
import SubredditTrainingForm from './SubredditTrainingForm';
import SubredditTopicFetchResult from './SubredditTopicFetchResult';
import AdditionalInfo from './AdditionalInfo';

class SubredditTopicsViewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subreddit: '',
            postType: 'top',
            topicProgress: {loading: false, error: false, subreddit: undefined, result: undefined}
        }
    }

    render() {
        return (
            <div>
                <SubredditTrainingForm
                    subreddit={this.state.subreddit}
                    postType={this.state.postType}
                    onSubredditChange={(subreddit) => this.setState({subreddit})}
                    onPostTypeChange={(postType) => this.setState({postType})}
                    onSubmit={this.handleSubredditTrainingFormSubmit}
                />
                <SubredditTopicFetchResult
                    {...this.state.topicProgress}
                />
                <div className='section-divider'/>
                <AdditionalInfo/>
            </div>
        );
    }

    handleSubredditTrainingFormSubmit = (postType) => {
        this.setState((prev) => {
            return {
               topicProgress: {
                   loading: true,
                   error: false,
                   subreddit: prev.subreddit,
                   result: undefined
               }
            };
        });

        this.props.fetchTopicsForSubreddit(this.state.subreddit, this.state.postType)
            .then(
                (subredditTopicResult) => {
                    this.setState({
                        topicProgress: {
                            loading: false,
                            error: false,
                            subreddit: this.state.subreddit,
                            result: subredditTopicResult
                        }
                    });
                },
                (error) => {
                    this.setState({
                        topicProgress: {
                            loading: false,
                            error: true,
                            subreddit: this.state.subreddit,
                            result: undefined
                        }
                    });
                    console.log("Error loading subreddit topics: ", error);
                }
            );
    };

}

export default SubredditTopicsViewer;