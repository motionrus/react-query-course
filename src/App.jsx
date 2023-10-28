import { Link, Route, Routes, useMatch } from "react-router-dom";
import Issues from "./pages/Issues";
import Issue from "./pages/Issue";
import AddIssue from "./pages/AddIssue";

function App() {
  const isRootPath = useMatch({ path: "/", end: true });

  return (
    <div className="App">
      {!isRootPath ? (
        <Link to="/">Back to Issues List</Link>
      ) : (
        <span>&nbsp;</span>
      )}
      <h1>Issue Tracker</h1>
      <Routes>
        <Route element={<Issues />} path="/" />
        <Route element={<AddIssue />} path="/add" />
        <Route element={<Issue />} path="/issue/:number" />
      </Routes>
    </div>
  );
}

export default App;
