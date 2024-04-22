import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BlankPage from "./views/BlankPage";
import { routes } from "./util/router";

function App() {
  const [open, setOpen] = useState(true);

  function toggleSidebar() {
    setOpen(!open);
  }

  return (
    <>
      <BrowserRouter>
        <div className="flex h-screen font-roboto">
          <Sidebar open={open} toggleSidebar={toggleSidebar} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar open={open} toggleSidebar={toggleSidebar} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-light-gray">
              <Routes>
                <Route path="/" element={<Navigate to={"/dashboard"} />} />
                <Route path="/*" element={<BlankPage />} />
                {routes.map(({ id, path, element }) => {
                  return <Route exact key={id} path={path} element={element} />;
                })}
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
