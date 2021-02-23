import React from 'react';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/react';

import { addItemPrivateDriverFactory } from './test/AddItem.private.driver';
import { addItemPrivateUniDriverFactory } from './test/AddItem.private.uni.driver';

import AddItem from './AddItem';

describe('AddItem', () => {
  const renderAddItem = (props = {}) => <AddItem {...props} />;

  describe('[sync]', () => {
    runTests(createRendererWithDriver(addItemPrivateDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(addItemPrivateUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    describe('Props', () => {
      describe('`children` prop', () => {
        const text = 'Add New Item';
        const node = <div data-hook="node-child">{text}</div>;
        const renderFunc = () => (
          <div data-hook="render-func-node-child">
            this will not apply text styles
          </div>
        );

        it('should render [when] string is given', async () => {
          const { driver } = render(renderAddItem({ children: text }));
          expect(await driver.getText()).toEqual(text);
        });

        it('should render [when] node is given', async () => {
          const { driver } = render(renderAddItem({ children: node }));
          expect(
            !!(await driver.element()).querySelector(
              '[data-hook="node-child"]',
            ),
          ).toBe(true);
        });

        it('should render [when] function is given and should not apply Text styles', async () => {
          const { driver } = render(renderAddItem({ children: renderFunc }));
          expect(
            !!(await driver.element()).querySelector(
              '[data-hook="render-func-node-child"]',
            ),
          ).toBe(true);

          expect(await driver.textExists()).toBe(false);
        });

        it('should not render children as string when theme is `image`', async () => {
          const props = { children: text, theme: 'image' };
          const { driver } = render(renderAddItem(props));
          expect(await driver.textExists()).toEqual(false);
        });
      });

      describe('`onClick` prop', () => {
        it('should call onClick when clicked', async () => {
          const onClick = jest.fn();
          const { driver } = render(renderAddItem({ onClick }));
          await driver.click();
          expect(onClick).toHaveBeenCalled();
        });
      });

      describe('`disabled` prop ', () => {
        it('should not call onClick when disabled', async () => {
          const onClick = jest.fn();
          const { driver } = render(renderAddItem({ onClick, disabled: true }));
          await driver.click();
          expect(onClick).not.toHaveBeenCalled();
        });
      });
      describe('`icon` prop ', () => {
        it('should get icon src', async () => {
          const illustrationSrc = './illustrationSrc.svg';
          const { driver } = render(renderAddItem({ icon: illustrationSrc }));

          expect(await driver.getIcon()).toEqual(illustrationSrc);
        });
      });

      describe('`subtitle` prop ', () => {
        it('should render [when] string is given', async () => {
          const subtitle =
            'You can upload jpeg, png and gif files up to 5 mb size';
          const { driver } = render(renderAddItem({ subtitle }));
          expect(await driver.getSubtitle()).toEqual(subtitle);
        });

        it('should render [when] node is given', async () => {
          const node = <div data-hook="node-child"></div>;
          const { driver } = render(renderAddItem({ children: node }));
          expect(
            !!(await driver.element()).querySelector(
              '[data-hook="node-child"]',
            ),
          ).toBe(true);
        });
      });
    });

    describe('Tooltip', () => {
      it('should appear [when] `theme` image prop is passed', async () => {
        const props = { tooltipContent: 'content', theme: 'image' };
        const { driver } = render(renderAddItem(props));
        expect(await driver.tooltipElementExists()).toEqual(true);
      });

      it('should show the correct tooltip content [when] `theme` image prop is passed', async () => {
        const props = { tooltipContent: 'content', theme: 'image' };
        const { driver } = render(renderAddItem(props));
        expect(await driver.getTooltipContent()).toEqual('content');
      });
    });
  }
});
