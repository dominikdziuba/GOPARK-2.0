import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import Register from './Register';
import AddCar from './AddCar';
import History from './History';
import CarCollection from './CarCollection';
import Home from './Home';
import Paying from './Paying';


export default class Login extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <Router>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/addcar' element={<AddCar />} />
                <Route path='/history' element={<History />} />
                <Route path='/cars' element={<CarCollection/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/paying' element={<Paying />} />
                <Route   path='/login' element={

                    <div className="login-container">
                        <form className="login" action="login" method="post">
                            <input name="login" type="text" placeholder="Login" />
                            <input name="password" type="password" placeholder="Password" />
                            <button className="LoginBtn" type="submit">
                                Login
                            </button>
                        </form>
                    </div>
                } />
            </Routes>
        </Router>
        );
    }
}