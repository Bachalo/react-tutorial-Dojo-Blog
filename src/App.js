 // !!! You don't need to import React in version over 17. of React
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

// Component is a function.
// Functions have to start with capital letter.
function App() {
  return (
    // This is not HTML it's JSX.
    // in JSX we use camelCase and HTML class is equal to className in JSX.
    <Router>
      <div className="App">
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// Always export component function to use it in other files.
export default App;
