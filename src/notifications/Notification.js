// import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NotificationItem = (props) => {

    const variant = {
        initial: { x: -50 },
        animate: { x: 0 },
    }

    return ( 
        <motion.div className="NotificationItem"  initial="initial" animate="animate" variant={variant} >
            <h2>{props.title}</h2>
            <motion.div className="bar" initial="initial" animate="animate"variant={variant}/>
        </motion.div>
    );
}
 
export default NotificationItem;