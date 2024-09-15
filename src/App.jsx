import { Footer, Header, Navbar } from "./components/index.components";
import { About, Skills, Testimonial, Work } from "./container/index.container";

function App() {
  return (
    <div className="bg-primaryColor">
      <Navbar />
      <Header />
      <About />
      {/*  <Work />
      <Skills />

      <Testimonial />

      <Footer /> */}
    </div>
  );
}

// Export the App function, not the JSX
export default App;
