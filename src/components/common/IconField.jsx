import {GrSearch} from "react-icons/gr"
import {AiOutlineSearch} from "react-icons/ai"
import {BsSendFill} from "react-icons/bs"


const IconField = ({icon, placeholder}) => {
  return (
    <div className="icon-field position-relative">
      { 
        icon ? <BsSendFill className="position-absolute end-0 mt-1 pt-1 me-2 fs-4"/> :
        <AiOutlineSearch className="position-absolute end-0 mt-2 me-2 fs-4"/>
      }
      <input type="text" className="form-control form-control-md dim-input" 
        placeholder={placeholder} 
      />
    </div>
  )
}

export default IconField