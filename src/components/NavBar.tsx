import React, { Fragment, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Travel from './Travel';
import Icon from '../img/icon.png';
import ListTravels from './ListTravels';
const NavBar = () => {


    return (
        <Fragment>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">
                    <img src={Icon} width="30" height="30" alt="" loading="lazy" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active mr-3">
                            <Link to="/" className="nav-links-text">TRAVEL</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to="/list" className="nav-links-text">LIST</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">

                <div className="App">
                    <Route exact path='/' component={Travel} />
                    <Route exact path='/list' component={ListTravels} />
                </div>
            </div>        </Fragment>

    );
}

export default NavBar;