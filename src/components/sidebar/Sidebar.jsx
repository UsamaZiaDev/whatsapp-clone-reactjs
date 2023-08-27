
import {BiPowerOff} from "react-icons/bi"
import {BsThreeDotsVertical} from "react-icons/bs"

import Profile from "./../../assets/images/profile.jpg"
import Profile2 from "./../../assets/images/profile-2.jpg"
import Profile3 from "./../../assets/images/profile-3.jpg"
import Profile4 from "./../../assets/images/profile-4.jpg"

import IconField from '../common/IconField'

const Sidebar = () => {

    const SidebarDummyContent =[
      {
        id:0,
        name:"safi",
        lastsceen: "9:13 AM",
        lastmessage: "see you soon :)",
        totalmessage: "5",
        img: Profile
      },
      {
        id:1,
        name:"zain",
        lastsceen: "10:28 PM",
        lastmessage: "sure!",
        totalmessage: "2",
        img: Profile2
      },
      {
        id:2,
        name:"waqar",
        lastsceen: "2:53 PM",
        lastmessage: "on the way",
        totalmessage: "9+",
        img: Profile3
      },
      {
        id:3,
        name:"tkn",
        lastsceen: "12:44 AM",
        lastmessage: "tekken 8 combos",
        totalmessage: "6",
        img: Profile4
      },
    ]

  return (
    <div className="bg-primary vh-100">
      
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

      <div className=" sidebar-chat-boxs p-3 ">
        {
          SidebarDummyContent?.map((users)=>{
            const {id, name, lastmessage, lastsceen, totalmessage, img} = users
              return(
                <div className="mb-2 d-flex px-3 border-bottom border-dim py-2 align-items-center" key={id}>
                  <img src={img} className=" img-60 border-success border-3 border"/>
                  <div className="con ms-3 box align-items-center w-100 d-flex justify-content-between">
                        <div className="">
                          <h6 className="text-capitalize"> {name} </h6>
                          <p className="text-dim small"> {lastmessage} </p>
                        </div>
                        
                        <div className="align-items-center  d-flex justify-content-between">
                          <p className="text-dim small"> {lastsceen}  </p>
                          <h6 className="total-chat-counter ms-2"> {totalmessage} </h6>
                          <BsThreeDotsVertical className="fs-4 text-dim" />
                        </div>
                  </div>
                </div>
              )
          })
        }
      </div>


    </div>
  )
}

export default Sidebar