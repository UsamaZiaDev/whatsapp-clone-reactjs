import UserInfoCard from '../common/UserInfoCard'

const Sidebar = () => {
  return (
    <div className="bg-primary vh-100">
      <UserInfoCard/>

      <div className="sidebar-chat-search p-3">
        <input type="text" class="form-control form-control-md p-" placeholder="search..." />
      </div>


    </div>
  )
}

export default Sidebar