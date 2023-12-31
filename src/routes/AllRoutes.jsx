import { Routes, Route, Navigate } from "react-router-dom";

import {
  Home,
  Admin,
  PageNotFound,
  ProductDetail,
  Products,
  Contact,
  ContactIn,
  ContactUs,
  ContactOther,
} from "../pages/index";

function AllRoutes() {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />}></Route>
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="contact" element={<Contact />}>
        <Route path="in" element={<ContactIn />} />
        <Route path="us" element={<ContactUs />} />
        <Route path="*" element={<ContactOther />} />
      </Route>
      <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
