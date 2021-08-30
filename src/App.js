 // !!! You don't need to import React in version over 17. of React
import Navbar from './Navbar';
import Home from './Home'

// Component is a function.
// Functions have to start with capital letter.
function App() {
  return (
    // This is not HTML it's JSX.
    // in JSX we use camelCase and HTML class is equal to className in JSX.
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

// Always export component function to use it in other files.
export default App;
