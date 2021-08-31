import { Link } from "react-router-dom";

// Destructuring inside paramaters
const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => {
            return (
                // You must specify key atribute when using .map
                <div className="blog-preview" key={ blog.id }>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
                </div>
            );
        })}
        </div>
    );
}
 
export default BlogList;
