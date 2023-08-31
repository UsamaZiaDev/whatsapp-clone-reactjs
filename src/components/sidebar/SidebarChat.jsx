import {BsThreeDotsVertical} from "react-icons/bs"

import profilePlaceholder from "./../../assets/images/profilePlaceholder.jpg"

const SidebarChat = (props) => {
    const {id, name, lastmessage, lastsceen, totalmessage, img} = props?.users
  return (
    <>
        <div className="mb-2 d-flex px-3 border-bottom border-dim py-2 align-items-center" key={id}>
            <img src={img ? img : profilePlaceholder} className=" img-60 border-success border-3 border"/>
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
    </>
  )
}

export default SidebarChat