import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const fileUploadDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
