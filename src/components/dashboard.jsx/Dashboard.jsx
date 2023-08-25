import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import ChatBody from './ChatBody'

const Dashboard = () => {
  return (
    <div className="main-layout p-0">
        <div className="row p-0 vh-100">
            <div className="col-3 p-0 ">
                <Sidebar/>
            </div>
            <div className="col-9 p-0 ">
                <ChatBody/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard