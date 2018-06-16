import React from 'react';
import './SynsetSelector.css';
const classNames = require('classnames');

class SynsetSelector extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedSynset: undefined
        };
    }

    onSynsetClicked = (synsetKey, event) => {
        this.setState({selectedSynset: synsetKey});

        this.props.onSynsetSelected(synsetKey, event)
    };

    render(){
        const selectedSynset = this.state.selectedSynset;
        const onSynsetClicked = this.onSynsetClicked;

        const definitionRows = this.props.synsetResultSummary.map(function(res){
			const synsetKey = res.synset;
			const rowClass = classNames('synset-selector__synset-row',
				{'synset-selector__synset-row--selected': selectedSynset === res.synset });

            return (
               <div className={rowClass}  key={synsetKey} onClick={(e) => onSynsetClicked(synsetKey, e) }>
                   <div className={'synset-selector__synset-gloss'}>
					   <span className={'synset-selector__synset-label'}>{res.synset}: </span>
					   <span>{res.gloss}</span>
                   </div>
                   <div className={'synset-selector__comment-count-container'}>
                       <span className={'synset-selector__comment-count'}>
						   {res.commentCount} Comments
					   </span>
                   </div>
               </div>
            ) ;
        });

        return (
            <div className={'synset-selector synset-search-result__synset-selector'}>
                {definitionRows}
            </div>
        );
    }

}

export default SynsetSelector;