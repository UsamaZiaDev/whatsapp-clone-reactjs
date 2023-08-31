
import {BiPowerOff} from "react-icons/bi"

import Profile from "./../../assets/images/profile.jpg"
import Profile2 from "./../../assets/images/profile-2.jpg"
import Profile3 from "./../../assets/images/profile-3.jpg"
import Profile4 from "./../../assets/images/profile-4.jpg"

import IconField from '../common/IconField'
import SidebarChat from "./SidebarChat"
import AppModal from "../common/AppModal"

import {FirebaseContext} from "./../../core/FirebaseProvider"

const Sidebar = () => {

    const SidebarDummyContent =[
      {
        id:0,
        name:"Rana Ashfaq",
        lastsceen: "9:13 AM",
        lastmessage: "see you soon :)",
        totalmessage: "5",
        img: Profile
      },
      {
        id:1,
        name:"Malik Kala",
        lastsceen: "10:28 PM",
        lastmessage: "sure!",
        totalmessage: "2",
        img: Profile2
      },
      {
        id:2,
        name:"Rana Pervaiz",
        lastsceen: "2:53 PM",
        lastmessage: "on the way",
        totalmessage: "9+",
        img: Profile3
      },
      {
        id:3,
        name:"Malik Bashir",
        lastsceen: "12:44 AM",
        lastmessage: "tekken 8 combos",
        totalmessage: "6",
        img: Profile4
      },
      {
        id:4,
        name:"Ch Laquait",
        lastsceen: "5:14 AM",
        lastmessage: "cards designed...",
        totalmessage: "1"
      },
    ]

  return (
    <div className="bg-primary vh-100">

      <AppModal
        title="Room"
        text="Create New Room"
        close={true}
      />
      
      <div className="bg-dark user-info-card p-3 d-flex align-items-center ">
        <img src={Profile} className="rounded-circle img-60 border-success border-3 border"/>
        <div className="text-light con ms-3 g-danger w-100 d-flex justify-content-between">
              <h4> Messages </h4>
              <p > Logout <BiPowerOff className="fs-4" /> </p>
        </div>
      </div>

      <div className="sidebar-chat-search px-3 pb-4 bg-dark g-info border-bottom border-dim">
        <IconField
          placeholder="search ..."
        />
      </div>


      {/* <AppModal/> */}

      <div className=" sidebar-chat-boxs p-3 ">
        {
          SidebarDummyContent?.map((users, index)=> <SidebarChat key={index} users={users} /> )
        }
      </div>

    </div>
  )
}

export default Sidebar