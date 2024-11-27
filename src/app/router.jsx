import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingRoute } from "./routes/landing";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
      </Routes>
    </Router>
  );
};
