import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost, faSearch, faHome, faArrowRight, faArrowDown, faLock, faPlus, faCreditCard, faUniversity, faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar2 from './components/Navbar2'
import 'jquery';
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import Sidebarleft from './components/SidebarLeft'
import SideBar from './components/Sidebar'
import SideBarRight from './components/SidebarRight'
import Register from './components/Register'
import Reservation from './components/Reservation'
import Registration from './components/Registration'
import SectionC from './components/SectionC'
import ProfilePage from './pages/ProfilePage'


library.add(faGhost, faSearch, faHome, faArrowRight, faArrowDown, faLock, faPlus, faCreditCard, faUniversity, faBars)

class App extends Component {
  componentDidMount() {
    this.props.history.push('/')
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar2></Navbar2>
          <Route path='/registration:user_id' component={Registration}></Route>
          <Route path='/Sectionc:user_id' component={SectionC}></Route>
          <Route path='/profile:user_id' component={ProfilePage}></Route>
          <div className='row'>
            <div className='col s12 m2 hide-on-small-only		'>
              <Route exact path='/' component={Sidebarleft}></Route>
            </div>
            <div className='col s12 m7'>
              <Route exact path='/' component={Home}></Route>
              <Route path='/register' component={Register}></Route>
              <Route path='/reservation:user_id' component={Reservation}></Route>
            </div>
            <div className='col s12 m3 hide-on-small-only		'>
              <Route exact path='/' component={SideBar}></Route>
              <Route path='/register' component={SideBarRight}></Route>
              <Route path='/reservation:user_id' component={SideBarRight}></Route>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
