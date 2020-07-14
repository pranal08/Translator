import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{

    renderSubmit(value){
        return value==='english'?'Submit':'Soumettre';
    }

    render(){
        
        return(
        <button className="ui button primary">
            <LanguageContext>
                {(value)=>this.renderSubmit(value)}
            </LanguageContext></button>
        );
    }
}

export default Button;