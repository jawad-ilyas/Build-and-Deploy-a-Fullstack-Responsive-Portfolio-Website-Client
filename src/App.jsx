import { Footer, Header, Navbar } from "./components/index.components";
import { About, Skills, Testimonial, Work } from "./container/index.container";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </>
  );
}

// Export the App function, not the JSX
export default App;
