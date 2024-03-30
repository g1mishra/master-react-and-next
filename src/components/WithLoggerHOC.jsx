// HOC : it takes a component and returns a new component with additional props/data

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log(
      `Logging the component: ${WrappedComponent.name} ${JSON.stringify(
        props || {}
      )}`
    );
    return <WrappedComponent {...props} />;
  };
};

// const NewComponent = withLogger(XYZ)
// <NewComponent />

// // fun = (comp) => {
//     return (props) {
//         <COmp .></COmp .>
//     }
// }

export default withLogger;
