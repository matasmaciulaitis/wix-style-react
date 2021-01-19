import React, { useEffect } from 'react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { visualize, snap } from 'storybook-snapper';
import Search from '../Search';
import { searchUniDriverFactory } from '../Search.uni.driver';
import { storySettings } from './storySettings';
import { Cell, Layout } from '../../Layout';

const { dataHook } = storySettings;

const createDriver = () =>
  uniTestkitFactoryCreator(searchUniDriverFactory)({
    wrapper: document.body,
    dataHook,
  });

const expand = async () => createDriver().click();

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'should render',
        props: {},
      },
    ],
  },
  {
    describe: 'expandable',
    its: [
      {
        it: 'should render',
        props: {
          expandable: true,
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'expandable',
    its: [
      {
        it: 'should expand on click',
        props: {
          expandable: true,
        },
        componentDidMount: expand,
      },
      {
        it: 'should expand to fixed width on click',
        props: {
          expandable: true,
          expandWidth: '250px',
        },
        componentDidMount: expand,
      },
    ],
  },
];

const InteractiveSearchWrapper = ({ componentDidMount, ...props }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  }, [componentDidMount]);

  return <Search {...props} />;
};

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(`${themeName ? `${themeName}|` : ''}Search`, () => {
    tests.forEach(({ describe, its }) => {
      its.forEach(({ it, props }) =>
        snap(it, () =>
          testWithTheme(
            <Layout>
              <Cell>
                <Search {...props} />
              </Cell>
              <Cell>
                <Search {...props} size="small" />
              </Cell>
            </Layout>,
          ),
        ),
      );
    });

    interactiveTests.forEach(({ describe, its }) => {
      its.forEach(({ it, props, componentDidMount }) => {
        snap(it, () =>
          testWithTheme(
            <InteractiveSearchWrapper
              dataHook={dataHook}
              {...props}
              componentDidMount={componentDidMount}
            />,
          ),
        );
      });
    });
  });
};
