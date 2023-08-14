import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import ListMetro from "./pages/listMetro/listMetro";
import ListTrain from "./pages/listTrain/listTrain";
import Login from "./pages/login/Login";
import Registre from "./pages/register/Registre";
import "./App.css";
import Card from "./pages/listDetails/card";
import ProfileSettings from "./pages/profileSetting/profileSetting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registre />} />
        <Route path="/setting" element={<ProfileSettings />} />
        <Route path="/list" element={<List />} />
        <Route path="/listMetro" element={<ListMetro />} />
        <Route path="/listTrain" element={<ListTrain />} />
        <Route path="/details" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
