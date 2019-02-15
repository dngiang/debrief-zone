import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const{ authError, auth } = this.props;
        if (auth.uid) return <Redirect to ='/' />
            return (
                <div className="container">
                <h4 className="instructions">Ran out of team meeting time? Share your experiences, thoughts and ideas with your team members right here right now.</h4>
                <form onSubmit= {this.handleSubmit} className="white">
                <br />
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn orange darken-4 z-depth-0">Log In</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>

                <h6 className="grey-text text-darken-2">Guest Login<br/>
                Email: guest@gmail.com<br/>
                Password: test1234<br/></h6>
                </div>
            )
     }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

