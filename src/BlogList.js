import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


// Destructuring inside paramaters
const BlogList = ({ blogs, title }) => {

    const variant = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
    }


    return (
        <div className="blog-list">
            <motion.h2  initial="initial" animate="animate" variants={variant} >{title}</motion.h2>
            {blogs.map((blog) => {
            return (
                // You must specify key atribute when using .map
                <motion.div className="blog-preview" initial="initial" animate="animate" variants={variant} key={ blog.id }>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
                </motion.div>
            );
        })}
        </div>
    );
}
 
export default BlogList;
