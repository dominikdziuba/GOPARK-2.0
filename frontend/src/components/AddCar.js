import React, { Component } from "react";

export default class Register extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="base-container">
                <nav>
                    <img src="public/img/logo.svg" alt="Logo" />
                    <ul>
                        <li>
                            <i className="fa-solid fa-plus"></i>
                            <Link to="/addCar" className="button">Dodaj pojazd</Link>
                        </li>
                        <li>
                            <i className="fa-regular fa-hand"></i>
                            <Link to="/showCars" className="button">Twoje pojazdy</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-dollar-sign"></i>
                            <Link to="/payment" className="button">Opłać postój</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-paperclip"></i>
                            <Link to="/history" className="button">Historia</Link>
                        </li>
                        <li>
                            <i className="fa-regular fa-circle-dot"></i>
                            <Link to="/panels" className="button">Strona domowa</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <header>
                        <div className="logout">
                            <i className="fa-solid fa-door-open"></i>
                            <a href="login" className="logout"></a>
                        </div>
                    </header>
                    <section className="data">
                        <h1></h1>
                        <form action="addCar" method="POST" encType="multipart/form-data">
                            <input name="brand" type="text" placeholder="Marka" />
                            <input name="model" type="text" placeholder="Model" />
                            <input name="register" type="text" placeholder="Nr rej." />
                            <input type="file" name="file" /><br />
                            <button type="submit">Wyślij</button>
                        </form>
                    </section>
                </main>
            </div>
        );
    }
}