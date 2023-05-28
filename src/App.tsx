import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RecoilRoot } from 'recoil';

import { Main as MainLayout } from "./layouts/main/Main.tsx";

import { DashBoard } from "./pages/dashboard/Dashboard.tsx";
import Login from "./pages/auth/login/Login.tsx";

import Register from "./pages/auth/register/Register.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<MainLayout auth><DashBoard /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
