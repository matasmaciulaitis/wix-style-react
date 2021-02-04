import PropTypes from 'prop-types';
import InputWithOptions from '../InputWithOptions/InputWithOptions';

class AutoComplete extends InputWithOptions {
  static displayName = 'AutoComplete';

  static propTypes = {
    ...InputWithOptions.propTypes,

    /** Callback predicate for the filtering options function */
    predicate: PropTypes.func,

    /** The message to be displayed instead of options, when no options exist, or no options pass the predicate filter function */
    emptyStateMessage: PropTypes.node,
  };

  static defaultProps = {
    ...InputWithOptions.defaultProps,
    predicate: () => true,
  };

  static getDerivedStateFromProps(props, state) {
    const { options, predicate, emptyStateMessage } = props;
    const {
      isEditing,
      prevOptions,
      prevPredicate,
      prevIsEditing,
      prevFilteredOptions,
    } = state;
    let filteredOptions = prevFilteredOptions;
    if (
      options !== prevOptions ||
      predicate !== prevPredicate ||
      isEditing !== prevIsEditing
    ) {
      const filterFunc = isEditing ? predicate : () => true;
      filteredOptions = options.filter(filterFunc);
    }

    const additionalProps =
      emptyStateMessage && filteredOptions.length === 0
        ? {
            options: [
              {
                id: 'empty-state-message',
                value: emptyStateMessage,
                disabled: true,
              },
            ],
          }
        : { options: filteredOptions };

    return {
      additionalProps,
      prevOptions: options,
      prevPredicate: predicate,
      prevIsEditing: isEditing,
      prevFilteredOptions: filteredOptions,
    };
  }

  dropdownAdditionalProps() {
    const { additionalProps } = this.state;
    return additionalProps;
  }
}

export default AutoComplete;
