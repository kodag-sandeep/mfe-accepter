import React from "react";
const CounterAppOne = React.lazy(() => import("container/App"));
const Button = React.lazy(() => import("container/button"));

const App = () => {
  return (
    <>
      <h1>welcome to MFE accepter component</h1>
      <React.Suspense fallback={"loading"}>
        <CounterAppOne />
        <br />
        <Button />
      </React.Suspense>
    </>
  );
};

export default App;
