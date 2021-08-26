
import '../styles/App.css';
import Header from './Header';
import HomePage from './HomePage'
import {  Route, Switch } from 'react-router-dom';
import SearchBox from './SearchBox';

function App() {
  return (
    <div className="App">
       <Header/>
       <Switch> 
        
                <Route exact path='/' component={HomePage}  />
                <Route path="/searchbox" component={SearchBox} />
               
            </Switch>
     
     
      
    
    </div>
  );
}

export default App;
