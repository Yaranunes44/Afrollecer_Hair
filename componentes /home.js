import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss'

const Home = () => {
    return (
        <div className="Home">
            <header>
                <h1><span>A</span>afrollecer<span>s</span> está sempre dando closes diferentes fazendo  <span>afrobraid</span></h1>
            </header>
            <div>
                <Link to="/agenda_horário">
                    <button>agenda_horário</button>
                </Link>
            </div>
        </div>
    )
}
export default Home; 