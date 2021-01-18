import * as React from 'react';
import AvatarGroup from '..';
import { AvatarGroupTestkit } from '../../../testkit';
import { AvatarGroupTestkit as AvatarGroupEnzymeTestkit } from '../../../testkit/enzyme';
import { AvatarGroupTestkit as AvatarGroupPuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function avatarGroupWithMandatoryProps() {
  return <AvatarGroup />;
}

function avatarGroupWithAllProps() {
  return (
    <AvatarGroup
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = AvatarGroupTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = AvatarGroupEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await AvatarGroupPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
