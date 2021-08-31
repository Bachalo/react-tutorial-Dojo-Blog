import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");
    // const [name, setName] = useState('mario');

    /* 
        NOTE

        useEffect runs when rendering component
        useEffect(function, dependencies);
        useEffect(() => {
            console.log('useEffect run')
        }, [name]);
        Now useEffect will run on initial render and if the name value changes.
        This empty [] makes useEffect run only after the initial render.
        These are useEffect dependencies. 
    */


    // NOTE you can't use async in initial useEffect function.
    

    return ( 
    <div className="home">
        {/* Conditional checks 
        Fixes the error blogs is null
        check if stuff on the left is true  if it is it outputs stuff on the right */}
        { error && <div>{ error }</div> }
        { isLoading && <div>Loading ...</div> }
        { data && <BlogList blogs={data} title="All blogs" />}
        {/* Similar to .map loops through elements in array and
         if it returns false it doesn't include it in array on return
        <BlogList blogs={blogs.filter((blog) => blog.author === 'luigi')} title="Luigi blogs"  handleDelete={handleDelete}  /> */}
    </div>
    ); 
}
 
export default Home;
