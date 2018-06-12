import React from 'react';

class EnterKeyListener extends React.Component {
    constructor(props) {
        super(props);
        this.enterKeyListenerRef = React.createRef();
    }

    render() {
        return (
            <span ref={this.enterKeyListenerRef}>
                {this.props.children}
            </span>
        );
    }

    componentDidMount(){
        this.enterKeyListenerRef.current.addEventListener('keyup', this.onEnterKeyUp);
    }

    onEnterKeyUp = (event) => {
        if (event.key === "Enter"){
            this.props.onEnterKey(event);
            event.target.blur();
        }
    };

    componentWillUnmount(){
        this.enterKeyListenerRef.current.removeEventListener('keyup', this.onEnterKeyUp);
    }
}

export default EnterKeyListener;