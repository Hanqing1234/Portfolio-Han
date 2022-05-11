import React, { FC, Suspense } from "react";

import Loading from "./components/Loading";
import Nav from "./sections/Nav";

const Home = React.lazy(() => import("./sections/Home"));
const Project = React.lazy(() => import("./sections/Project"));


const App: FC = () => (
  <div id="app">
    <Suspense fallback={<Loading />}>
      <Nav />
      <main>
        <Home />
        <Project />
      </main>
    </Suspense>
  </div>
);

export default App;
