import React from "react";
import { FluxProvider } from "./store/flux.jsx";
import Test from "./views/test.jsx";

function App() {
  return (
    <FluxProvider>
      <div>
        <Test />
      </div>
    </FluxProvider>
  );
}

export default App;
