import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {ConstPaths} from "./ConstPaths.ts";

export const ProductsRotes: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<h1>Products</h1>} />
        <Route path={ConstPaths.CREATE}  element={<h1>Create Product</h1>} />
      </Routes>
    </>
  );
}