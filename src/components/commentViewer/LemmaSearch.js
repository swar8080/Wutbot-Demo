import React from 'react';
import EnterKeyListener from '../common/EnterKeyListener';
import './LemmaSearch.css';

class LemmaSearch extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const isSearchDisabled = this.props.searchNoun === '';

        return (
            <div className='lemma-search'>
                <p className='lemma-search__instructions'>
                    <span>Enter a noun from the&nbsp;</span>
                    <a
                        href='http://wordnetweb.princeton.edu/perl/webwn?s=bass&sub=Search+WordNet&o2=&o0=1&o8=1&o1=1&o7=&o5=&o9=&o6=&o3=&o4=&h=00000000'
                        target='_blank'
                        rel='noopener noreferrer'>
                        WordNet Database
                    </a>
                    <span>:</span>
                </p>
                <div className={"lemma-search__search-container"}>
                    <EnterKeyListener onEnterKey={this.props.onNounSubmit}>
                        <input type='text' placeholder='Noun (Singular)' className='lemma-search__lemma-input'
                           value={this.props.searchNoun}
                           onChange={this.props.onNounChange}
                        />
                    </EnterKeyListener>

                    <input type='button' value='Search' className='lemma-search__submit-button'
                           onClick={this.props.onNounSubmit}
                           disabled={isSearchDisabled}
                    />
                </div>
            </div>
        );
    }
}

export default LemmaSearch;