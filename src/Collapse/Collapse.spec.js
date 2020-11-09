import React from 'react';
import { mount } from 'enzyme';

import Collapse from '.';
import { getElementHeight } from './Collapse';

describe('Collapse', () => {
  it('should render children', () => {
    const wrapper = mount(<Collapse children="hello" />);
    expect(wrapper.text()).toEqual('hello');
  });

  describe('`open` prop', () => {
    it('should not render children when false', () => {
      const wrapper = mount(<Collapse open={false} children="hello" />);
      expect(wrapper.children().text()).toEqual('');
    });
  });

  describe('`dataHook` prop', () => {
    it('should be passed to children', () => {
      const hookForRoot = "I'm Hooked!";
      const hookOfChild = 'Leave britney alone!';

      const wrapper = mount(
        <Collapse
          dataHook={hookForRoot}
          children={<div data-hook={hookOfChild}>arbitrary content</div>}
        />,
      );

      expect(wrapper.children().prop('data-hook')).toEqual(hookForRoot);
      expect(wrapper.find(`[data-hook="${hookOfChild}"]`).exists()).toBe(true);
    });
  });
});

describe('getElementHeight', () => {
  it('returns height of element', () => {
    const wrapper = mount(<div style={{ height: 500 }}>Text</div>);
    const element = wrapper.getDOMNode();
    Object.defineProperty(element, 'scrollHeight', {
      configurable: true,
      value: 500,
    });
    expect(getElementHeight(wrapper.getDOMNode())).toBe(500);
  });

  it('adds vertical margin to calculated height', () => {
    const wrapper = mount(
      <div style={{ height: 500, marginTop: 30, marginBottom: 30 }}>Text</div>,
    );
    const element = wrapper.getDOMNode();
    Object.defineProperty(element, 'scrollHeight', {
      configurable: true,
      value: 500,
    });
    expect(getElementHeight(wrapper.getDOMNode())).toBe(560);
  });
});
