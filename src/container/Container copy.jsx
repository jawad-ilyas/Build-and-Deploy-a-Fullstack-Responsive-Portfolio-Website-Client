// withContainer.js (new HOC file)

const Container = (WrappedComponent) => {
  return function Container(props) {
    return (
      <div className='w-full py-8 container px-4 mx-auto'>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Container;
