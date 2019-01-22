import {enzymeTestkitFactoryCreator, WrapperData, enzymeUniTestkitFactoryCreator} from 'wix-ui-test-utils/enzyme';

import {inputDriverFactory} from '../components/Input/Input.driver';
export const inputTestkitFactory: (obj: WrapperData) => any = enzymeTestkitFactoryCreator(inputDriverFactory);

import {textDriverFactory} from '../components/Text/Text.driver';
export const textTestkitFactory: (obj: WrapperData) => any = enzymeTestkitFactoryCreator(textDriverFactory);

import {buttonDriverFactory} from '../components/Button/Button.driver';
export const buttonTestkitFactory = enzymeUniTestkitFactoryCreator(buttonDriverFactory);

import {autocompleteDriverFactory} from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory: (obj: WrapperData) => any = enzymeTestkitFactoryCreator(autocompleteDriverFactory);
