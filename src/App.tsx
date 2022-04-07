import React, { FC, Suspense } from "react";

import Loading from "./components/Loading";

const Home = React.lazy(() => import("./sections/Home"));



const App: FC = () => (
  <div id="app">
    <Suspense fallback={<Loading />}>
      <main>
        <Home />
   
       
      </main>

    </Suspense>
  </div>
);

export default App;
