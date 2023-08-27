import React from "react"
import Navbar ,{APPWithRouter}from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Moto from "./components/Moto"
import SignIn_sponser  from "./components/SignIn_sponser"
import Signin_student  from "./components/Signin_student"
import SignUp from "./components/SignUp_student";
import Signup from "./components/SignUp_sponser"
import ChatBox from "./components/Chat_box"
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Sponser_list from "./components/browse";
import Personal_details from './components/Profilecomponents/Personal_details';
import Idealist from "./components/Profilecomponents/Idealist"
import Ideas from "./components/Profilecomponents/Ideas";
import Settings from "./components/Profilecomponents/Settings";
import Passwords from "./components/Profilecomponents/Passwords";
import Update from "./components/Profilecomponents/Update"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import PrivateComponent from "./components/PrivateComponent"
import Signupc from "./components/Signupc"

const App = ()=>{
    return(
      <>
        <Router>
          <APPWithRouter />

              <Routes>

                <Route element ={<PrivateComponent />} >
                <Route path='/services' element={<Services />} exact></Route>
                <Route path='/moto' element={<Moto />} exact></Route>
                <Route path='/chatbox' element={<ChatBox />} exact></Route>
                <Route path = '/contact' element= {<Contact />} exact></Route>
                <Route path='/join'    element={<join />}   exact ></Route>
                <Route path="/browse" element = {<Sponser_list/>}></Route>
                <Route path="/profile" element = {<Profile/>}></Route>
                <Route path="/personal" element = {<Personal_details/>}></Route>
                <Route path="/idealist" element ={<Idealist/>}></Route>
                <Route path="/idea" element = {<Ideas/>}></Route>
                <Route path="/settings" element = {<Settings/>}></Route>
                <Route path="/passwords" element = {<Passwords/>}></Route>
                <Route path="/update/:id" element = {<Update/>}></Route>  
                 </Route>
                <Route path='/' element={<Home />} exact></Route>
                <Route path='/about' element={<About />} exact></Route> 
                <Route path='/signin_sponser' element={<SignIn_sponser />} exact></Route>
                <Route path='/signin_student' element={<Signin_student />} exact></Route>
                <Route path='/signup_student' element={<SignUp />} exact></Route>
                <Route path='/signup_sponser' element={<Signup />} exact></Route>
                <Route path='/signupc' element={<Signupc />} exact></Route>
              </Routes>
              
        </Router>
      </>
    )
}

export default App