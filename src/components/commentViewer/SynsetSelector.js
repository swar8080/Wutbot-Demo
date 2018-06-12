import React from 'react';
import './SynsetSelector.css';

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
        const rowClass = (selectedSynset === res.synset)? 'definitionRow selected' : 'definitionRow';

            return (
               <div className={rowClass}  key={synsetKey} onClick={(e) => onSynsetClicked(synsetKey, e) }>
                   <div className={'definitionTextContainer'}>
                       <p className={'definitionText'}>
                           <span className={'synsetLabel'}>{res.synset}: </span>
                           <span className={'gloss'}>{res.gloss} </span>
                       </p>
                   </div>
                   <div className={'commentCount'}>
                       <span>{res.commentCount} Comments</span>
                   </div>
               </div>
            ) ;
        });

        return <div className={'component-synsetSelector'}>{definitionRows}</div>;
    }

}

export default SynsetSelector;