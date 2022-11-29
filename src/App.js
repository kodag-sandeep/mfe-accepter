import React from "react";
// const Button = React.lazy(() => import("container/button"));

const Users = React.lazy(() => import("shared2/getData"));

const App = () => {
  const getUserDetail = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <h4>HOME</h4>
      {/* <React.Suspense fallback={"loading"}>
        <Button />
      </React.Suspense> */}
      <br />
      <React.Suspense fallback={"loading"}>
        <Users getUserDetail={getUserDetail} />
      </React.Suspense>
    </React.Fragment>
  );
};

export default App;
