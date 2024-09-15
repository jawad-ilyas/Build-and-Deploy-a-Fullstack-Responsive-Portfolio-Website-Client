// Container.js
const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-16 2xl:py-8">    
      {children}
    </div>
  );
};

export default Container;
