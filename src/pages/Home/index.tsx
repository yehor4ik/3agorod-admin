import {FC} from "react";
import {Navigate} from "react-router-dom";
import {ConstPaths} from "../../navigation/ConstPaths.ts";
import {useStateContext} from "../../context";

export const Home: FC = () => {
  const {state} = useStateContext();
  const redirectPath = !state.authUser ? ConstPaths.LOGIN : ConstPaths.HOME

  return (
    <div className="home">
      <Navigate to={redirectPath} />
      Home
    </div>
  )
}