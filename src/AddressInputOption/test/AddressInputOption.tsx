import * as React from 'react';
import AddressInputOption, { addressInputOptionBuilder } from '..';
import { addressInputOptionTestkitFactory } from '../../../testkit';
import { addressInputOptionTestkitFactory as addressInputOptionEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { addressInputOptionTestkitFactory as addressInputOptionPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function addressInputOptionWithMandatoryProps() {
  return <AddressInputOption />;
}

function addressInputOptionBuilderWithAllProps() {
  const { disabled, id, overrideOptionStyle, value } = addressInputOptionBuilder({
    id: '1',
    dataHook: 'data-hook',
    className: 'cls',
    disabled: true,
    prefix: <div />,
    secondaryLabel: 'secondary label',
    suffix: <div />,
    mainLabel: 'main label',
    optionLayout: 'double-line',
    displayLabel: 'display label',
    onClick: ()=>{},
  });
}

function addressInputOptionWithAllProps() {
  return (
    <AddressInputOption
      className="some-class"
      dataHook="hi"
      disabled
      onClick={event => {}}
      prefix={<div />}
      secondaryLabel="secondary label"
      suffix={<div />}
      mainLabel="main label"
      optionLayout='double-line'
      displayLabel='display label'
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
