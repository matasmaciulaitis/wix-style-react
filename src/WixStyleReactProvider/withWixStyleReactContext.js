import React from 'react';
import { WixStyleReactContext } from './context';
import { getDisplayName } from '../common/hocUtils';

const withWixStyleReactContext = Component => {
  class WixStyleReactContext extends React.Component {
    static displayName = getDisplayName(Component);
    static defaultProps = Component.defaultProps;

    render() {
      const { forwardedRef, ...restProps } = this.props;
      return (
        <WixStyleReactContext.Consumer>
          {features => (
            <Component ref={forwardedRef} {...restProps} features={features} />
          )}
        </WixStyleReactContext.Consumer>
      );
    }
  }

  return React.forwardRef((props, ref) => (
    <WixStyleReactContext {...props} forwardedRef={ref} />
  ));
};

export default withWixStyleReactContext;
