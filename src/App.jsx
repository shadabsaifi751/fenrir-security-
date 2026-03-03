import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AppLayout } from "./components/layout/AppLayout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ScanDetail } from "./pages/ScanDetail";
import { Scans } from "./pages/Scans";
import { ComingSoon } from "./pages/ComingSoon";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<ComingSoon />} />
            <Route path="/scans" element={<Scans />} />
            <Route path="/scans/:id" element={<ScanDetail />} />
            <Route path="/schedule" element={<ComingSoon />} />
            <Route path="/notifications" element={<ComingSoon />} />
            <Route path="/settings" element={<ComingSoon />} />
            <Route path="/support" element={<ComingSoon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
