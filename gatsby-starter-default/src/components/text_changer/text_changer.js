import React from 'react';
const { Component } = React; 
class TextChanger extends Component{
    constructor(){
        super();
        this.state = {textIdx:0};

    }
    componentDidMount(){
        this.timeout = setInterval(
            () => {
                let currentIdx = this.state.textIdx;
                this.setState(
                    {
                        textIdx: currentIdx + 1
                    }
                );
            }, 500
        );

    }
    componentDidUnmount(){
        clearInterval(this.timeout);
    }
    
    render(){
        const{
            text_array = []
        } = this.props;

        let dynamic_text = text_array[this.state.textIdx % text_array.length];
        return(
            <span>{dynamic_text}</span>
        )
    }
}
export default TextChanger
