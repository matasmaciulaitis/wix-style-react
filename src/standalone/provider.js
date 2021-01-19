import React from 'react';
import { WSRComponentsContext } from './context';

export function WSRDynamicLoadingProvider({
  componentLoaders,
  preloaded,
  children,
}) {
  const [components, setComponents] = React.useState(preloaded);
  React.useEffect(() => {
    !preloaded && loadComponents(componentLoaders, setComponents);
  }, []);
  if (!components) {
    return null;
  }
  return React.createElement(
    WSRComponentsContext.Provider,
    { value: components },
    children,
  );
}

function loadComponents(componentLoaders, done) {
  const loaded = {};
  Promise.all(
    Object.keys(componentLoaders).map(component =>
      componentLoaders[component]().then(Component => {
        loaded[component] = Component;
      }),
    ),
  ).then(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      __webpack_require__.stylable.$.init(window);
    }
    done(loaded);
  });
}
