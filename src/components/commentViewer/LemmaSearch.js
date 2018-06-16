import React from 'react';
import EnterKeyListener from '../common/EnterKeyListener';
import './LemmaSearch.css';

class LemmaSearch extends React.Component {

    constructor(props){
        super(props);
        this.lemmaInputRef = React.createRef();
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
                <div className={"lemma-search__form"}>
                    <EnterKeyListener onEnterKey={this.props.onNounSubmit}>
                        <input type='text' className='lemma-search__textbox' placeholder='Noun (Singular)'
                           ref={this.lemmaInputRef}
                           value={this.props.searchNoun}
                           onChange={this.props.onNounChange}
                        />
                    </EnterKeyListener>

                    <input type='button' value='Search'
                           onClick={this.props.onNounSubmit}
                           disabled={isSearchDisabled}
                    />
                </div>
            </div>
        );
    }

    componentDidMount(){
    	this.lemmaInputRef.current.focus();
	}
}

export default LemmaSearch;