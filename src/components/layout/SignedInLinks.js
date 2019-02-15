import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const SignedInLinks = (props) => {
    return (
        <div>
          <ul className="right">
            <li><NavLink to='/create'>New Case</NavLink></li>
            <li><a href="/" onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn-small btn-floating light-grey">
                {props.profile.initials}
            </NavLink></li>
          </ul>
        </div>
      )
    }

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks) 