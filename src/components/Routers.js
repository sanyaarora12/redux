import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Output from "./Output";
import PersonalDetails from "./PersonalDetails";

export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/personalDetails" element={<PersonalDetails />} />
          <Route path="/output" element={<Output />} />
        </Routes>
      </Router>
    </div>
  );
}
