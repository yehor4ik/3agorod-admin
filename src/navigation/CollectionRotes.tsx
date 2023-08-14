import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {ConstPaths} from "./ConstPaths.ts";
import {CreateCollection} from "../pages/CreateCollection";

export const CollectionRotes: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<h1>Collection</h1>} />
        <Route path={ConstPaths.CREATE}  element={<CreateCollection />} />
      </Routes>
    </>
  );
}