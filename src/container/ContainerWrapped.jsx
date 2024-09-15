const ContainerWrapped = (WrappedComponent) => {
  return function WrappedWithContainer(props) {
    return (
      <div className="w-full py-8 container px-4 mx-auto">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default ContainerWrapped;
