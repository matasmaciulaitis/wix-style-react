const WSRComponents = React.createContext();

WSRComponents.Root = function WSR({ componentLoaders, preloaded, children }) {
  const [components, setComponents] = React.useState(preloaded);
  React.useEffect(() => {
    !preloaded && loadComponents(componentLoaders, setComponents);
  }, []);
  if (!components) {
    return null;
  }
  return React.createElement(
    WSRComponents.Provider,
    { value: components },
    children,
  );
};

function loadComponents(componentLoaders, done) {
  const loaded = {};
  Promise.all(
    Object.keys(componentLoaders).map(component =>
      componentLoaders[component]().then(Component => {
        loaded[component] = Component;
      }),
    ),
  ).then(() => done(loaded));
}
