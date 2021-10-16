import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Timeline from "./layout/timline/Timeline";
import About from "./layout/about/About";
import "./css/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "react-loader-spinner";
import FadeIn from "react-fade-in/lib/FadeIn";
import Footer from "./layout/Footer";
import Contact from "./layout/contact/Contact";
import Skill from "./layout/skill/Skill";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {!loading ? (
        <main className="form-signin ">
          <div className="row">
            <div className="col-12 pt-5 mt-5" />
            <div className="col-12 pt-3 mt-4" />
            <div className="col-12 pt-5 mt-5"></div>
            <Loader
              type="Grid"
              color="#232323"
              height={120}
              width={120}
              timeout={2000} //3 secs
            />
          </div>
        </main>
      ) : (
        <div>
          <FadeIn>
            <Header />
            <div id="home">
              <Content />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="experiance">
              <Timeline />
            </div>
            <div id="skill">
              <Skill/>
            </div>
            <div id="contact">
              <Contact/>
            </div>
            <Footer />
          </FadeIn>
        </div>
      )}
    </div>
  );
}

export default App;
