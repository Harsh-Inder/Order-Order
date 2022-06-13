import './topbar.css'
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo"> Order-Order </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge"> 2 </span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge"> 2 </span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8anVkZ2UlMjBoYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar