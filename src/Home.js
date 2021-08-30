import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [ blogs, setBlogs ] = useState([
        { title: "My new website", body: "lorem ipsum...", author: 'mario', id: 1 },
        { title: "Welcome party", body: "lorem ipsum...", author: 'luigi', id: 2 },
        { title: "Dev tools!", body: "lorem ipsum...", author: 'turtle', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
    <div className="home">
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
        {/* Similar to .map loops through elements in array and
         if it returns false it doesn't include it in array on return */}
        <BlogList blogs={blogs.filter((blog) => blog.author === 'luigi')} title="Luigi blogs"  handleDelete={handleDelete}  />
    </div>
    ); 
}
 
export default Home;
