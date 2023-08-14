import {FC} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {ConstPaths} from "./ConstPaths.ts";

export const CollectionLayout: FC = () => {
  const collectionLink = <Link to={`/${ConstPaths.PRODUCT}`}> {'<'} Back to collection</Link>

  const collectionLinks = <>
    <Link to={`/${ConstPaths.PRODUCT}`}> {'<'} Back to product</Link>
    <Link to={`/${ConstPaths.COLLECTION}/${ConstPaths.CREATE}`}>Create</Link>
  </>

  return (
    <>
      <Routes>
        <Route index element={collectionLinks}/>
        <Route path={ConstPaths.CREATE} element={collectionLink}/>
      </Routes>
    </>
  )
}