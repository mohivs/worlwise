import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="/login" element={<Login />} />

        <Route path="app" element={<AppLayout />}>
          <Route path="cities" element={<p>hello</p>} />
          <Route path="countries" element={<p>list of countries</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
