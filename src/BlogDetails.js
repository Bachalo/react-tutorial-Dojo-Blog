import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const url = `http://localhost:8000/blogs/${id}`;
    const { data: blog, isLoading, error } = useFetch(url)
    const history = useHistory();
    const [err, setErr] = useState(null);

    const handleDelete = () => {
        fetch(url, {
            method: "DELETE",
        })
        .then((res) => {
            console.log(res);
            if(!res.ok) {
                throw Error("Could not delete article")
            }
            history.push('/');
        })
        .catch((err) => {
            setErr(err);
        });
    }    
    
    
    return (
        <div className="blog-details">
            { error && <div>{error}</div> }
            { isLoading && <div>Loading</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <h4>Written by { blog.author }</h4>
                    <div className="blog-details-body">{ blog.body }</div>
                    <button onClick={handleDelete}>DELETE THIS ARTICLE</button>
                    { err && <div>{err}</div>}
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;