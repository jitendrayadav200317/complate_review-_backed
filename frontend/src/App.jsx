import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreatePost from "./pages/CreatePost.jsx";
import Feed from "./pages/Feed.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/Feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;
