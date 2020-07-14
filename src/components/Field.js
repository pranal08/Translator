import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{

    static contextType = LanguageContext;
    
    render(){
        const textName= this.context==='english'? 'Name': 'Nom';
        return(
            <div className="ui field">
                <label>{textName}</label>
                <input/>
            </div>
        );
    }
}

export default Field;