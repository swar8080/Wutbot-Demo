import React from 'react';
import LemmaSearch from './LemmaSearch';
import SynsetSearchResult from './SynsetSearchResult';
import PagedCommentFetchResult from "./PagedCommentFetchResult";
import './WutbotCommentViewer.css'

class WutbotCommentViewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchNoun: '',
            searchProgress: {
                loading: false,
                error: false,
                lemma: undefined,
                result: undefined
            },
            commentProgress: {
                loading: false,
                error: false,
                synset: undefined,
                comments: undefined
            }
        };
    }

    handleNounChange = (e) => {
        this.setState({
            searchNoun: e.target.value
        });
    };

    handleNounSubmit = () => {
      const searchNoun = this.state.searchNoun;

      this.setState({
          searchProgress: {loading: true, error: false, lemma: searchNoun, result: undefined},
          commentProgress: {loading: false, error: false, comments: undefined}
      });

      this.props.fetchCommentCountBySynset(searchNoun).then(
          (searchResult) => {
              this.setState({
                  searchProgress: {loading: false, error: false, lemma: searchNoun, result: searchResult}
              });
              console.log("Search results: ", searchResult);
          },
          (error) => {
              this.setState({
                  searchProgress: {loading: false, error: true, lemma: searchNoun, result: undefined}
              });
              console.log("Error fetching comment count by synset", error);
          }
      );
    };

    handleSynsetSelected = (synsetId) => {
        console.log("Synset selected", synsetId);

        this.setState({
           commentProgress: {loading: true, error: false, synset: synsetId, comments: undefined}
        });

        this.props.fetchCommentsForSynset(synsetId, this.state.searchNoun).then(
            (comments) => {
                this.setState({
                    selectedSynset: synsetId,
                    commentProgress: {loading: false, error: false, synset: synsetId, comments},
                });
                console.log("Comments received", comments);

                //scroll to bottom of page to make comment visible
                window.scrollTo(0,document.body.scrollHeight);
            },
            (error) => {
                this.setState({
                    commentProgress: {loading: false, error: true, synset: synsetId, comments: undefined}
                });
                console.log("Error fetching comments for synset", error);
            }
        );
    };

    render(){
        return (
            <div className={'component-wutbotCommentViewer'}>
                <LemmaSearch
                    searchNoun={this.state.searchNoun}
                    onNounChange={this.handleNounChange}
                    onNounSubmit={this.handleNounSubmit}
                />
                {(this.state.submittedSearch)? <div className='section-divider'/> : null}
                <SynsetSearchResult
                    {...this.state.searchProgress}
                    onSynsetSelected={this.handleSynsetSelected}
                />
                {(this.state.commentProgress.comments)? <div className='section-divider'/> : null}
                <PagedCommentFetchResult
                    {...this.state.commentProgress}
                />
            </div>
        );
    }
}
export default WutbotCommentViewer;