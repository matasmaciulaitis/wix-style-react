import * as React from 'react';
import <%= ComponentName %> from '..';
import { <%= componentName %>TestkitFactory } from '../../../testkit';
import { <%= componentName %>TestkitFactory as <%= componentName %>EnzymeTestkitFactory } from '../../../testkit/enzyme';
import { <%= componentName %>TestkitFactory as <%= componentName %>PuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function <%= componentName %>WithMandatoryProps() {
  return <<%= ComponentName %> />;
}

function <%= componentName %>WithAllProps() {
  return (
    <<%= ComponentName %>
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = <%= componentName %>TestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = <%= componentName %>EnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await <%= componentName %>PuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
