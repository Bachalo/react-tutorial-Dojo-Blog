import NotificationItem from "./Notification";

const NotificationWrapper = (props) => {
    const notifications = props.notifications;

    return (
        <div className="NotificationWrapper">
            {notifications.map((element) => {
                return <NotificationItem key={element.id} title={element.message} handleDelete={props.handleDelete} />
            })}
        </div>
    );
}
 
export default NotificationWrapper;