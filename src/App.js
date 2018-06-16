import React from 'react';
import ProjectInfo from "./components/about/ProjectInfo";
import SubredditTopicsApp from './components/subredditTopics/SubredditTopicsApp';
import CommentViewerApp from './components/commentViewer/CommentViewerApp';
import './App.css';
const classNames = require('classnames');

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
            selectedTab: 1
        }
    }

    selectTab = (i) => {
        this.setState({selectedTab: i});
    };

    render() {
        const selected = this.state.selectedTab;
        const tabClasses = Array.from({length: this.tabContent.length}, (el, i) => {
			return classNames('tabs__tab', {'tabs__tab--selected': selected === i});
        });

        return (
            <div className='wutbot-root'>
              <nav className='tabs'>
                <div className={tabClasses[0]} onClick={() => this.selectTab(0)}>
                    <div className='tabs__tab-content'>About</div>
                </div>
                <div className={tabClasses[1]} onClick={() => this.selectTab(1)}>
                    <div className='tabs__tab-content'>Subreddit Topics</div>
                </div>
                <div className={tabClasses[2]} onClick={() => this.selectTab(2)}>
                    <div className='tabs__tab-content'>Comment WSD</div>
                </div>
                <a className={`${tabClasses[3]} tabs__link-tab`} href='https://www.reddit.com/r/WutbotPosts/' target='blank'>
                    <div className='tabs__tab-content'>
                        <span>Reddit Bot </span>
                        <span className='glyphicon glyphicon-link'></span>
                    </div>
                </a>
              </nav>
              <div className='wutbot-root__content'>
                  {this.tabContent[selected]}
              </div>
            </div>
        );
  }
}

export default App;
