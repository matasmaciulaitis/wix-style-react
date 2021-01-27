import Popover from '../../Popover';
import React from 'react';
import Avatar from '../../Avatar';
import { dataHooks } from '../constants';
import { classes, st } from '../AvatarGroup.st.css';

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
          dataHook={
            shouldBeWithOnClick
              ? dataHooks.avatarGroupMoreItem
              : dataHooks.avatarGroupItem
          }
          key={key}
          className={st(classes.moreItemAvatar, {
            clickable: shouldBeWithOnClick,
          })}
          size={size}
          text={text}
          onClick={shouldBeWithOnClick ? this.toggle : null}
        />
      );
    }
    return <Avatar key={key} className={className} size={size} text={text} />;
  };

  renderPopover = content => {
    const { className, size, text } = this.props;
    if (!!content) {
      return (
        <Popover
          placement={'top'}
          shown={this.state.shouldRender}
          className={classes.popover}
        >
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
    return this.props.render(this.renderPopover);
  }
}

export default MoreItemAvatar;
