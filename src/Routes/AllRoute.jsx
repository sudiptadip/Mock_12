import React from "react";
import { Route, Routes } from "react-router-dom";
import Bookmak from "../pages/Bookmak";
import Homepage from "../pages/Homepage";

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/bookmark" element={<Bookmak />} />
    </Routes>
  );
}
