// {} to destructure useState function.
import { useState } from "react";

const Home = () => {
    // let name = 'mario';

    // Array destructuring in () we specify default value.
    const [name, setName] = useState('mario');


    /* By refrencing function button onClick parameter
    you automatily gain information about the event. */


    const handleClick = () => {
        // Changes value of name and triggers re-render.
        setName('luigi');
    }

    // const handleClickAgain = (name,e) => {
    //     console.log(name);
    // }

    return ( <div className="home">


        <h2>Homepage</h2>



        {/* Don't invoke the function by using (); 
        pass in only refrence to function */}



        <button onClick={handleClick}>{name}</button>



        {/* If you need to pass paramters to function wrap it
        with anonymous arrow function then invoke it there */}

        {/* <button onClick={(e) => handleClickAgain('mario',e)}>Click me again</button> */}
        
        {/* Also if you need information about the event
        specify event in anonymous function args
        and pass it into your refrened function. */}
    </div> );
}
 
export default Home;