
import {MdCall} from "react-icons/md"
import {BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import {GoDotFill} from "react-icons/go"

import Profile2 from "./../../assets/images/profile-2.jpg"

const ChatBody = () => {
  return (
    <div className="bg-primary border-start border-dim vh-100">
      
    {/* chtabox-topbar */}
     <div className="bg-dark user-info-card p-4 d-flex align-items-center  border-bottom  border-dim">
        <img src={Profile2} className="rounded-circle img-60 border-success border-3 border"/>
        <div className="text-light con ms-3 g-danger w-100 d-flex justify-content-between">
              <div>
                <h4 className="mb-0"> Frontend Developer </h4>
                <GoDotFill className="text-success"/> <span  className="text-dim"> online </span>
              </div>
              <p className="fs-4"> 
                <AiOutlineSearch className="fs-3"/>
                <MdCall className="mx-3"/> 
                <BsThreeDotsVertical/>
              </p>
        </div>
      </div>  
      
      
    </div>
  )
}

export default ChatBody