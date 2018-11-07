import React from 'react'
import {Link} from 'react-router-dom'

const SideBar = () => {

    return (
        <div className='card '>
            <div className='card-content'>
                <h6 className='center'>Online Banking</h6>
            </div>

            <div className="card-tabs ">
                <ul className="tabs grey center lighten-3 grey-text">
                    <li className="tab"><a href="#test4">Personal</a></li>
                    <li className="tab"><a className="active" href="#test5">Business</a></li>
                </ul>
            </div>

            <div className='card-content grey center lighten-2 grey-text'>
                <button className='btn-large orange darken-4 white-text'>Login</button>
                <h6 className='center grey-text'><Link className='grey-text text-darken-3' to='/register'>Register</Link>|<Link className='grey-text text-darken-3' to=''>Demo</Link></h6>
            </div>

        </div>
    )
}

export default SideBar