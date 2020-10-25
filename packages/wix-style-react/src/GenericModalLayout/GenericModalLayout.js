import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './GenericModalLayout.scss';

export default class GenericModalLayout extends React.PureComponent {
  render() {
    const { dataHook, fullscreen, header, content, footer } = this.props;

    const containerClassNames = classNames(styles.container, {
      [styles.fullscreenContainer]: fullscreen,
    });

    return (
      <div
        data-hook={dataHook}
        className={containerClassNames}
        data-fullscreen={Boolean(fullscreen)}
      >
        <div>{header}</div>

        <div className={styles.content}>{content}</div>

        <div>{footer}</div>
      </div>
    );
  }
}

GenericModalLayout.propTypes = {
  /** applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: PropTypes.string,
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  fullscreen: PropTypes.bool,
};

GenericModalLayout.defaultProps = {
  fullscreen: false,
};

GenericModalLayout.displayName = 'GenericModalLayout';
