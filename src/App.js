import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ButtonsGenerator from "./pages/ButtonsGenerator";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<ButtonsGenerator />} />
          <Route path="*" element={<ButtonsGenerator />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
