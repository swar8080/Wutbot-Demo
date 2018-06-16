import React from 'react';
import EnterKeyListener from '../common/EnterKeyListener';
import './SubredditTrainingForm.css';

class SubredditTrainingForm extends React.Component {
    constructor(props) {
        super(props);
        this.subredditInputRef = React.createRef();
    }

    render() {
        return (
            <div className='subreddit-training-form'>
                <h3 className='subreddit-training-form__heading'>Generate a list of topics and synsets describing a subreddit's posts:</h3>
                <div className='subreddit-training-form__field-container'>
                    <div className='subreddit-training-form__label'>Subreddit Name:</div>
                    <EnterKeyListener onEnterKey={this.props.onSubmit}>
                        <input
                            type='text'
                            value={this.props.subreddit}
                            onChange={(e) => this.props.onSubredditChange(e.target.value)}
                            ref={this.subredditInputRef}
                        />
                    </EnterKeyListener>
                </div>

                <div className='subreddit-training-form__field-container'>
                    <div className='subreddit-training-form__label'>Posts to Sample:</div>
                    <select value={this.props.postType} onChange={(e) => this.props.onPostTypeChange(e.target.value)}>
                        <option value='new'>New</option>
                        <option value='hot'>Hot</option>
                        <option value='rising'>Rising</option>
                        <option value='top'>Top</option>
                    </select>
                </div>

                <input type='button' value='Get Topics'
                       onClick={this.props.onSubmit}
                       disabled={this.props.subreddit === ''}
                />
            </div>
        )
    }

    componentDidMount(){
        this.subredditInputRef.current.focus();
    }
}

export default SubredditTrainingForm;