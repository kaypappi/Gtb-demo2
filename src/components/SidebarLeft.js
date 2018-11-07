import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

const SideBarLeft = () => {
    return (
        <div>
            <h4 className='orange-text flow-text  text-darken-4'>Let Us Get Your Company Registration All Set!</h4>
            <h6 className=''>As you prepare to kickstart your business,take advantage of the GTBusiness Starter Package!</h6><br/>
            <Link to='/register'><button className='btn-large orange darken-4 white-text'>Find out More <FontAwesomeIcon icon='arrow-right'></FontAwesomeIcon></button></Link>
        </div>
        
    )
}
export default SideBarLeft