import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
    const {notifications} = props;
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                <span className="class-title center">Welcome, here are some latest news for you</span>
                    <ul className="logged-user">
                        {notifications && notifications.map(news => {
                            return <li key={news.id}>
                                        <span className="orange-text">{news.user} </span> 
                                        <span>{news.content}</span>
                                        <div className="grey-text note-date">
                                            {moment(news.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                            })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications