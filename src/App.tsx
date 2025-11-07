import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <Header isAuth={true} />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
