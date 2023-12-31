// import { useSearchParams } from "react-router-dom";
// function ProductDetail() {

//   const [searchParams] = useSearchParams();
//   console.log(searchParams.get("q"));
//   console.log(searchParams.get("instock"));
//   return (
//     <>
//       <div className="component">Search results for </div>
//     </>
//   );
// }

// export default ProductDetail;

import { useParams } from "react-router-dom";
function ProductDetail() {
  const params = useParams();
  console.log(params.id);

  return (
    <main>
      <div className="component">Product {params.id} - Product Detail</div>
    </main>
  );
}

export default ProductDetail;
