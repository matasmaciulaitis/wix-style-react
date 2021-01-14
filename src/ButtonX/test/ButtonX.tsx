import * as React from 'react';
import ButtonX from '..';
import { ButtonXTestkit } from '../../../testkit';
import { ButtonXTestkit as ButtonXEnzymeTestkit } from '../../../testkit/enzyme';
import { ButtonXTestkit as ButtonXPuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function buttonXWithMandatoryProps() {
  return <ButtonX />;
}

function buttonXWithAllProps() {
  return (
    <ButtonX
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = ButtonXTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = ButtonXEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await ButtonXPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
