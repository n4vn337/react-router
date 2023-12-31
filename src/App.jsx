// import { BrowserRouter } from "react-router-dom";
// import { Routes, Route, Navigate } from "react-router-dom";

import AllRoutes from "./routes/AllRoutes";

// import Home from "./components/Home";
// import Products from "./components/Products";
// import ProductDetail from "./components/ProductDetail";
// import Contact from "./components/Contact";
// import ContactIn from "./components/ContactIn";
// import ContactUs from "./components/ContactUs";
// import ContactOther from "./components/ContactOther";
// import Admin from "./components/Admin";
// import PageNotFound from "./components/PageNotFound";

// import {
//   Home,
//   Admin,
//   PageNotFound,
//   ProductDetail,
//   Products,
//   Contact,
//   ContactIn,
//   ContactUs,
//   ContactOther,
// } from "./pages";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Header, Footer } from "./components";
import "./App.css";
function App() {
  // const user = true;
  return (
    // <BrowserRouter>
    //   <h1>Hello World!</h1>
    // </BrowserRouter>
    // or directly wrap in index.js to make things easy

    <div className="App">
      <Header />
      {/* <main> */}
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="us" element={<ContactUs />} />
            <Route path="*" element={<ContactOther />} />
          </Route>
          <Route
            path="admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes> */}

      <AllRoutes />
      {/* </main> */}
      <Footer />
    </div>
  );
}

export default App;
