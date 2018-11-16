import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import Img1 from '../images/gtblogo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div className='hide-on-large-only'>
                <ul id="slide-out" className="sidenav">
                    <li />
                    <li><a href='/'>Locate <FontAwesomeIcon icon='arrow-down'></FontAwesomeIcon></a></li>
                    <li><a href='/'>Media</a></li>
                    <li><a href='/'>Help</a></li>
                    <li><a href='/'>Security</a></li>
                    <li><a href=''><FontAwesomeIcon icon='lock'></FontAwesomeIcon>Online Banking Login<FontAwesomeIcon icon='arrow-down'></FontAwesomeIcon>
                    </a></li >
                    <li>
                        <div className="divider" />
                    </li>
                    <li><NavLink className='black-text add' to='/register'>Business Starter</NavLink></li >
                    <li><NavLink className='black-text' to=''>Personal Banking</NavLink></li>
                    <li><NavLink className='black-text' to=''>Business Banking</NavLink></li>
                    <li><NavLink className='black-text' to=''>About GTBank</NavLink></li>
                    <li><NavLink className='black-text' to=''>Investor Relations</NavLink></li>
                </ul>

                <nav>
                    <div class="nav-wrapper orange darken-3">
                        <a href="#" data-target="slide-out" className="sidenav-trigger">
                            <i className="material-icons"><FontAwesomeIcon icon='bars'></FontAwesomeIcon></i>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Sidebar;