import Popover from '../../Popover';
import Box from '../../Box';
import React from 'react';
import Avatar from '../../Avatar';

class MoreItemAvatar extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldRender: false,
    };
  }

  toggle = () => {
    this.setState({ shouldRender: !this.state.shouldRender });
  };

  renderAvatar = ({ className, size, text }, shouldBeWithOnClick) => {
    const key = `${className}${size}${text}`;
    if (shouldBeWithOnClick) {
      return (
        <Avatar
          key={key}
          className={className}
          size={size}
          text={text}
          onClick={this.toggle}
        />
      );
    }
    return <Avatar key={key} className={className} size={size} text={text} />;
  };

  renderPopover = content => {
    const { className, size, text } = this.props;
    if (!!content) {
      return (
        <Popover placement={'top'} shown={this.state.shouldRender}>
          <Popover.Element>
            {this.renderAvatar({ className, size, text }, true)}
          </Popover.Element>
          <Popover.Content>{content}</Popover.Content>
        </Popover>
      );
    }
    return this.renderAvatar({ className, size, text });
  };

  render() {
    return <Box>{this.props.render(this.renderPopover)}</Box>;
  }
}

export default MoreItemAvatar;
