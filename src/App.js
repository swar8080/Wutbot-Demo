import React from 'react';
import ProjectInfo from "./components/about/ProjectInfo";
import SubredditTopicsApp from './components/subredditTopics/SubredditTopicsApp';
import CommentViewerApp from './components/commentViewer/CommentViewerApp';
import './App.css';

class App extends React.Component {

    constructor(props){
        super(props);

        this.tabContent = [
            <ProjectInfo/>,
            <SubredditTopicsApp/>,
            <CommentViewerApp/>,
            null,
        ];

        this.state = {
            selectedTab: 0
        }
    }

    selectTab = (i) => {
        this.setState({selectedTab: i});
    };

    render() {
        const selected = this.state.selectedTab;
        const classNames = Array.from({length: this.tabContent.length}, (el, i) => {
           return (selected === i)? 'wutbot-root__tabs__tab selected' : 'wutbot-root__tabs__tab';
        });

        return (
            <div className='wutbot-root'>
              <div className='wutbot-root__border'>
                  <div className='wutbot-root__tabs'>
                    <div className={classNames[0]} onClick={() => this.selectTab(0)}>
                        <div className='wutbot-root__tabs__tab__content'>About</div>
                    </div>
                    <div className={classNames[1]} onClick={() => this.selectTab(1)}>
                        <div className='wutbot-root__tabs__tab__content'>Subreddit Topics</div>
                    </div>
                    <div className={classNames[2]} onClick={() => this.selectTab(2)}>
                        <div className='wutbot-root__tabs__tab__content'>Comment WSD</div>
                    </div>
                    <a className={classNames[3]} href='https://www.reddit.com/r/WutbotPosts/' target='blank'>
                        <div className='wutbot-root__tabs__tab__content'>
                            <span>Reddit Bot </span>
                            <span className="glyphicon glyphicon-link"></span>
                        </div>
                    </a>
                  </div>
                  <div className='wutbot-root__content'>
                      {this.tabContent[selected]}
                  </div>
              </div>
            </div>
        );
  }
}

export default App;
