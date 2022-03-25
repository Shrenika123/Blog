import { Blogs } from "./features/Blogs/Blogs";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./features/Blogs/Blog";
import NotFound from "./Components/NotFound.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/:blogPage" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
