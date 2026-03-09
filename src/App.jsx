import { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Splash from "./pages/splashscreen";
import Navbar from "./components/navbar";
import Background from "./components/background";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Portofolio = lazy(() => import("./pages/portofolio"));
const Contact = lazy(() => import("./pages/contact"));
const ProjectDetail = lazy(() => import("./pages/projectDetail"));

export default function App() {

  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onLoadingComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen text-primary transition-colors duration-500">

      <Background />

      <Navbar />

      <Suspense fallback={null}>
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Portofolio />
                <Contact />
              </>
            }
          />

          <Route
            path="/project/:id"
            element={<ProjectDetail />}
          />

        </Routes>
      </Suspense>

    </div>
  );
}