import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts"; 
import Home from "./pages/home/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
