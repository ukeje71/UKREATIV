import {Routes, Route } from "react-router-dom";
// import GSAPDemo from "./gsap";
import App from "./App.jsx";

const Navigation = () => {
  return (
    <Routes>
      {/* <Route path="/wisdom-portfolio/" element={<GSAPDemo />} /> */}
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default Navigation