import React from 'react'
import '../index.css'
import Img1 from '../images/gtblogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

const Navbar2 = () => {
    const logo = {
        height: '100px',
        width: '100px',
        margin:'0 20px 0 0'
    }

    const link = {
        background: '#e65100',
        color: 'white'
    }

    return (
        <div className=''>
            <div className='row'>
                <Link to='/' className="brand-logo right"><img style={logo} src={Img1} alt=""></img></Link>
                <div className='col s6 m5 tria'>
                    <nav className='transparent z-depth-0'>

                        <ul className="right">
                            <li><a href='/'>Locate <FontAwesomeIcon icon='arrow-down'></FontAwesomeIcon></a></li>
                            <li><a href='/'>Media</a></li>
                            <li><a href='/'>Help</a></li>
                            <li><a href='/'>Security</a></li>
                        </ul>
                    </nav>

                </div>
                <div className='col s2 m3 tri'>
                    <nav className='transparent z-depth-0'>

                        <ul className="right">
                            <li><a href=''><FontAwesomeIcon icon='lock'></FontAwesomeIcon>Online Banking Login<FontAwesomeIcon icon='arrow-down'></FontAwesomeIcon>
                            </a></li >
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='row'>
                <div className='col s12 m8 '>
                    <nav className='transparent z-depth-0'>

                        <ul className="right">
                            <li><NavLink className='black-text' to=''><FontAwesomeIcon icon='home' className='font'></FontAwesomeIcon></NavLink></li>
                            <li><NavLink className='black-text add' to='/register'>Business Starter</NavLink></li >
                            <li><NavLink className='black-text' to=''>Personal Banking</NavLink></li>
                            <li><NavLink className='black-text' to=''>Business Banking</NavLink></li>
                            <li><NavLink className='black-text' to=''>About GTBank</NavLink></li>
                            <li><NavLink className='black-text' to=''>Investor Relations</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>



    )

}

export default Navbar2