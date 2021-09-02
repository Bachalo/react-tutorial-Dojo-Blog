 // !!! You don't need to import React in version over 17. of React
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { motion } from 'framer-motion';

// Component is a function.
// Functions have to start with capital letter.
function App() {

  const variant = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  } 

  return (
    
    // This is not HTML it's JSX.
    // in JSX we use camelCase and HTML class is equal to className in JSX.
    <Router>
      <motion.div className="App" initial="initial" animate="animate" variants={variant}>
        <Navbar />
        <div className="content" >
          <Switch>
            {/* exact makes sure that is 100% exact */}
            <Route exact path="/">
              <Home /> 
            </Route>
            <Route path="/create" >
              <Create />
            </Route>
            <Route path="/blogs/:id" >
              <BlogDetails />
            </Route>
            <Route path="*" >
              <NotFound />
            </Route>
          </Switch>
        </div>
      </motion.div>
    </Router>
  );
}

// Always export component function to use it in other files.
export default App;
