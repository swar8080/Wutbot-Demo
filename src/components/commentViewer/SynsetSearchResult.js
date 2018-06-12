import React from 'react';
import SynsetSelector from './SynsetSelector';
import ErrorMessage from '../common/ErrorMessage';
import LoadingSpinner from '../common/LoadingSpinner';
import './SynsetSearchResult.css';

export default class SynsetSearchResult extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
       let content = null;
       if (this.props.loading){
           content = <SynsetSearchLoading/>
       }
       else if (this.props.error){
           content = <SynsetSearchError lemma={this.props.lemma}/>
       }
       else if (!this.props.result){
           return null;
       }
       else if (!this.props.result.isValidLemma){
           content = <InvalidLemma lemma={this.props.lemma}/>
       }
       else if (this.props.result.rows.length === 0) {
           content = <NoCommentsForLemma lemma={this.props.lemma}/>
       }
       else {
           content = (
               <div>
                   <p className={'searchResultInstructions'}>Select the definition of "{this.props.lemma}" to see Reddit comments for:</p>
                   <SynsetSelector
                        synsetResultSummary={this.props.result.rows}
                        onSynsetSelected={this.props.onSynsetSelected}
                    />
               </div>
           );
       }

       return (
            <div className={'component-synsetSearchResult'}>
                {content}
            </div>
        );
    }
}

function SynsetSearchLoading(props){
    return (
        <LoadingSpinner/>
    );
}

function SynsetSearchError(props){
    return (
        <ErrorMessage
            message={`Error searching for comments matching "${props.lemma}"`}
        />
    );
}

function NoCommentsForLemma(props){
    return <p>No comments found for "{props.lemma}"</p>
}

function InvalidLemma(props){
    return (
        <ErrorMessage
            message={`Invalid noun: "${props.lemma}"`}
        />
    );
}