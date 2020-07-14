import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

 class App extends React.Component{
    state={ language: 'english'};

    onLanguageChange = (language) =>{
        this.setState({language: language});
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <div>
                    SELECT A LANGUAGE: 
                    <i className="flag us" onClick={()=>{this.onLanguageChange('english')}}/>
                    <i className="flag fr"onClick={()=>{this.onLanguageChange('french')}}/>
                </div>
                <div className="ui container">
                <LanguageContext.Provider value={this.state.language}>
                <UserCreate/>
                </LanguageContext.Provider>
                </div>
            </div>
        );
    }
 }

 export default App;