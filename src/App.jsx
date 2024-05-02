import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home";
import About from "./component/About";
import SideProjects from "./component/SideProjects";
import Resume from "./component/Resume";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route Component={Layout}>
            <Route exact path="/" Component={Home} />
            <Route exact path="about" Component={About} />
            <Route exact path="sideProjects" Component={SideProjects} />
            <Route exact path="resume" Component={Resume} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
