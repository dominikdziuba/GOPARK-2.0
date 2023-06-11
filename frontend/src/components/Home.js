import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container">
                <nav>
                    <img src="public/img/logo.svg" alt="Logo" />
                    <ul>
                        <li>
                            <i className="fa-solid fa-plus"></i>
                            <a href="addCar" className="button">Dodaj pojazd</a>
                        </li>
                        <li>
                            <i className="fa-regular fa-hand"></i>
                            <a href="showCars" className="button">Twoje pojazdy</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-dollar-sign"></i>
                            <a href="payment" className="button">Opłać postój</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-paperclip"></i>
                            <a href="history" className="button">Historia</a>
                        </li>
                        <li>
                            <i className="fa-regular fa-circle-dot"></i>
                            <a href="Home" className="button">Strona domowa</a>
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
                    </section>
                </main>
            </div>
        );
    }
}
