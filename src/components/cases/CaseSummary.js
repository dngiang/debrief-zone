import React from 'react'
import moment from 'moment'

const CaseSummary = ({file}) => {
    return (
    <div className="card z-depth-0 case-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{file.title}</span>
            <p>Post by {file.authorFirstName} {file.authorLastName}</p>
            <p className="grey-text">{moment(file.createdAt.toDate()).calendar()}</p>
        </div>
    </div>
    )
}

export default CaseSummary