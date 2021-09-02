import NotificationWrapper from "./NotificationsWrapper";
import './notifications-style.css';
import { useState } from "react";
import {v4} from 'uuid';

const NotificationProvider = (props) => {

    const [notificationList, setNotificationList] = useState([
        {
            id: v4(),
            type: 'SUCCESFULL',
            message: "Hello World",
        },
        {
            id: v4(),
            type: 'SUCCESFULL',
            message: "Hello World",
        },
        {
            id: v4(),
            type: 'SUCCESFULL',
            message: "Hello World",
        },
    ]); 

    const handleDelete = () => {
        console.log(notificationList);
        setNotificationList(notificationList.pop);
        console.log(notificationList);
    }

    return (
        <div className="NotificationProvider">
            <NotificationWrapper notifications={notificationList} handleDelete={handleDelete} />
            {props.children}
        </div>
    
    );
}
 
export default NotificationProvider;