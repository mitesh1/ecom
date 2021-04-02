import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {connect} from 'react-redux';

import './header.style.scss';

function signOut() {
    console.log("called")
    auth.signOut();
}

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop"> SHOP </Link>
            <Link className="option" to="/shop"> CONTACT </Link>
            {currentUser ? (<div className='option' onClick={() => signOut()}> SIGN OUT</div>)
                : (<Link className='option' to='/SignIn'> SIGN IN</Link>)
            }
        </div>

    </div>
)

const mapStatetoProps = state => ({
    currentUser : state.user.currentUser
})
export default connect(mapStatetoProps)(Header) ;