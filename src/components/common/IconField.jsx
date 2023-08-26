import {GrSearch} from "react-icons/gr"


const IconField = () => {
  return (
    <div className="icon-field position-relative ">
      <GrSearch className="position-absolute end-0 mt-2 me-2 fs-4 "/>
      <input type="text" class="form-control form-control-md p-" placeholder="search..." />
    </div>
  )
}

export default IconField