import {FC} from 'react';
import {Login} from './pages/Auth';
import {Routes, Route} from "react-router-dom";
import {ConstPaths} from "./navigation/ConstPaths.ts";
import {Home} from "./pages/Home";

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={ConstPaths.LOGIN} element={<Login/>}/>
        <Route path={ConstPaths.HOME} element={<Home/>}/>
      </Routes>
    </>
  );
};
