import React,{useState,useEffect} from 'react';
import {Switch,Route} from 'react-router-dom'
import HomePage from './HomePage';
// import LoginPage from './LoginPage';
// import SignupPage from './SignUp/Login';
import Navbar from './Navbar';
import Footer from './Footer';
import FindTutor from './FindTutor';
import RingLoader from "react-spinners/RingLoader";
import app from './SignUp/App';




function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
    setLoading(false);
    },3000)

  },[])
  return (
  
    <div className="App">
        {loading ? <div className="loader"> <RingLoader color={'#FF7579'} loading={loading}  size={150} /> </div>: <><Navbar/>
      <div className="container">
     <Switch>
       <Route exact path="/" component={HomePage}/>
       <Route exact path="/findtutor" component={FindTutor}/>
       {/* <Route exact path="/login" component={LoginPage}/> */}
       <Route exact path="/signup" component={app}/>
     </Switch>
     </div>
      <Footer/>
   
    </>}
       </div>
  );
}

export default App;
