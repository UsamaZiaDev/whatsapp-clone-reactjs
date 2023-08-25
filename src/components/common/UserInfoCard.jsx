import Profile from "./../../assets/images/profile.jpg"

const UserInfoCard = () => {
  return (
    <div className="bg-dark  user-info-card p-3 d-flex align-items-center rounded">
       <img src={Profile} className="rounded-circle img-60 border-success border-3 border"/>
       <div className="con ms-3">
            <h5> Safi Bruce </h5>
            <p className="small"> dummy con here ... </p>
       </div>
    </div>
  )
}

export default UserInfoCard