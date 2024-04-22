import { FC, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Lobby } from "../screen";

const ApplicationRoutes: FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Lobby />} />
      </Routes>
    </Fragment>
  );
};

export default ApplicationRoutes;
