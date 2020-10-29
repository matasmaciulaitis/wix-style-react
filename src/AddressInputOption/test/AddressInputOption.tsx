import * as React from 'react';
import AddressInputOption from '..';
import { addressInputOptionTestkitFactory } from '../../../testkit';
import { addressInputOptionTestkitFactory as addressInputOptionEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { addressInputOptionTestkitFactory as addressInputOptionPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function addressInputOptionWithMandatoryProps() {
  return <AddressInputOption />;
}

function addressInputOptionWithAllProps() {
  return (
    <AddressInputOption
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = addressInputOptionTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = addressInputOptionEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await addressInputOptionPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
