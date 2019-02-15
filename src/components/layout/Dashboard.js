import React, { Component } from 'react'
import Notifications from './Notifications'
import CaseList from '../cases/CaseList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render () {
        const {cases, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to ='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6 ">
                        <CaseList cases={cases} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cases: state.firestore.ordered.cases,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

 //Connecting to firestore online
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'cases', orderBy: ['createdAt','desc']},
        { collection: 'notifications', limit: 5, orderBy: ['time','desc']}
    ]))(Dashboard)