// stateless functional component sfc + Enter/Tab TO CREATE NEW.

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
