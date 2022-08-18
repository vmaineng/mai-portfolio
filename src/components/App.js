//import logo from './logo.svg';
import '../App.css';
import ProfilePage from '../pages/ProfilePage';
import ProjectPage from '../pages/ProjectPage';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
     Welcome to Mai's portfolio website!
        </h1>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

<Routes>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/projects' element={<ProjectPage />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
