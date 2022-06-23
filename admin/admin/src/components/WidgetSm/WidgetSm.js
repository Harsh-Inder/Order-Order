import './widgetSm.css';
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

const WidgetSm = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
          try {
            const res = await userRequest.get("users/?new=true");
            setUsers(res.data);
          } catch {}
        };
        getUsers();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle"> New Join Members </span>
            <ul className="widgetSmList"> 
            {users.map((user) =>(
                <li className="widgetSmListItem" key={user._id}>
                    <img
                        // src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                        src={
                            users.img || 
                            "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        }
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername"> {user.username} </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility />
                        Display
                    </button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default WidgetSm