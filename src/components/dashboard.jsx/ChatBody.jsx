
import {MdCall} from "react-icons/md"
import {BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import {GoDotFill} from "react-icons/go"

import IconField from "./../common/IconField"

import Profile2 from "./../../assets/images/profile-2.jpg"
import Profile3 from "./../../assets/images/profile-3.jpg"

const ChatBody = () => {
  return (
    <div className="chat-box-wraper bg-primary border-start border-dim vh-100 position-relative">
      
      {/* chtabox-topbar */}
     <div className=" bg-dark user-info-card p-4 d-flex align-items-center  border-bottom  border-dim">
        <img src={Profile2} className="rounded-circle img-60 border-success border-3 border"/>
        <div className="text-light con ms-3 g-danger w-100 d-flex justify-content-between align-items-center">
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

      {/* chtabox-chat-list */}
      <div className="p-4  chat-list-wrapper">
        <div className="d-flex flex-column chat-list">
        {
          [1,2,3,4,5].map((index)=><>  
              <div className="user-info-card d-flex align-items-start " key={index}>
                <div className="text-center">
                  <img src={Profile3} className="img-25 border-success border-2 border"/>
                  <p className="f-s text-dim mt-1"> 12:00</p>
                </div>
                <div className="bg-success px-3 py-2 ms-4 text-card">
                      <p className="small"> Lorem ipsum dolor sit amet .</p>
                </div>
              </div>


              <div className="user-info-card  d-flex align-items-start ">
                <div className="bg-success px-3 py-2 me-4 text-card">
                      <p className="small"> Lorem ipsum dolor sit amet .</p>
                </div>
                
                <div className="text-center">
                  <img src={Profile2} className="img-25 border-success border-2 border"/>
                  <p className="f-s text-dim mt-1"> 5:13</p>
                </div>

              </div>
            </>)
          }
        </div>
      </div>

      {/* chtabox-chat-typing */}
      <div className="mb-3 typing-card position-absolute bottom-0 w-100 px-3">
        <IconField 
          icon={true}
          placeholder="type a message ..."
        />
      </div>
      
    </div>
  )
}

export default ChatBody