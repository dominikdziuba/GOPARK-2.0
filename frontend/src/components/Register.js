import React, { Component } from "react";

export default class Register extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="register-container">
                <form className="register" action="register" method="post">
                    <input name="login" type="text" placeholder="Login" />
                    <input name="email" type="text" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <input name="confirmedPassword" type="password" placeholder="Repeat password" />
                    <button className="RegisterBtn" type="submit">
                        Register
                    </button>
                </form>
            </div>
        )
    }
}