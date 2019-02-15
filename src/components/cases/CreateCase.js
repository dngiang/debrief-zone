import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCase } from '../../store/actions/caseActions'
import { Redirect } from 'react-router-dom'

class CreateCase extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.createCase(this.state)
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to ='/signin' />
        return (
            <div className="container">
            <form onSubmit= {this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">My New Case</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="story">Case Story</label>
                    <textarea id="story" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn orange darken-4 z-depth-0">Create</button>
                </div>
            </form>
            </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCase: (file) => dispatch(createCase(file))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(CreateCase)

