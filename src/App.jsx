import { useState, useRef, useEffect } from "react";
import OzMap from "./OzMap";
import Drawer from "./Drawer";
import clsx from "clsx";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth < 700;

  const oz_map = useRef();
  const scrollToMap = () => {
    oz_map.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mapSectionClasses = clsx("oz-map", { mobile: isMobile });

  return (
    <>
      <section className="title">
        <h1>
          The Map of Oz: <span>Wicked Edition</span>
        </h1>
        <button onClick={scrollToMap} aria-label="Go to map">Explore</button>
      </section>
      <section className={mapSectionClasses} ref={oz_map}>
        <OzMap
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          drawerContent={drawerContent}
          setDrawerContent={setDrawerContent}
        />
        <Drawer
          isOpen={drawerOpen}
          setIsOpen={setDrawerOpen}
          content={drawerContent}
          setContent={setDrawerContent}
          isMobile={isMobile}
        />
      </section>
    </>
  );
}

export default App;
