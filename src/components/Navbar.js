import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Img1 from '../images/gtblogo.png'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Icon, Dropdown, NavItem } from 'react-materialize'



const Navbar = () => {
    const logo = {
        height: '100px',
        width: '100px'
    }

    
    return (
        <div className=''>
            <div className="row">
                <div className="col s9 m8">
                    <nav className="nav-extended">
                        <a className="brand-logo right" ><img style={logo} src={Img1}></img></a>
                        <div className="nav-wrapper orange darken-4">

                            <ul className="right">
                                <li><a href='/'>
                                    <ul id='dropdown2' className='dropdown-content'>
                                        <li><a href='/'>one</a></li>
                                        <li><a href='/'>one</a></li>
                                        <li><a href='/'>one</a></li>
                                    </ul>
                                    <a className=' btn dropdown-trigger' target='dropdown2'>Dropdown</a>
                                </a></li>
                                <li><a href='/'>Media</a></li>
                                <li><a href='/'>Help</a></li>
                                <li><a href='/'>Security</a></li>
                                <FontAwesomeIcon icon='search'></FontAwesomeIcon>
                                <li className='right'><a href='/'>Online Banking Login</a></li>
                            </ul>
                        </div>
                        <div className="nav-content white">
                            <FontAwesomeIcon icon='search'></FontAwesomeIcon>
                            <div className='row'>
                                <div className='s9 m8 offset-s3'>
                                    <ul className="tabs tabs-transparent">
                                        
                                        <li><a href='/' className='black-text'>Personal Banking</a></li>
                                        <li><a href='/' className='black-text'>Business Banking</a></li>
                                        <li><a href='/' className='black-text'>About GTBank</a></li>
                                        <li><a href='/' className='black-text'>Investor Relations</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
                <div className='col s1 tri'>
                
                </div>
            </div>
        </div>




    )
}

export default Navbar