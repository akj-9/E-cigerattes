import "./app.scss"
import Effects from "./components/effects/Effects";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Solutions from "./components/solutions/Solutions";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Effects"><Parallax type="effects"/></section>
    <section><Effects/></section>
    <section id="Solutions"><Parallax type="solutions"/></section>
    <Solutions/>
    <section id="Details">Details</section>
  </div>;
};

export default App;
