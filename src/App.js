
import './App.css';
import Home from "./Pages/Home";
import {Route, Routes} from 'react-router-dom'
import Layout from "./Components/Layout/Layout";
import Category from "./Pages/Category";
import Search from "./Pages/Search";
    import Details from "./Pages/Details";

function App() {
  return (
    <Layout>
      <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/category"} element={<Category />}></Route>
          <Route path={"/search"} element={<Search />}></Route>
          <Route path={"/detail/:id"} element={<Details />}></Route>
          <Route path={"/category/:title"} element={<Category />}></Route>
      </Routes>
    </Layout>

  );
}

export default App;
