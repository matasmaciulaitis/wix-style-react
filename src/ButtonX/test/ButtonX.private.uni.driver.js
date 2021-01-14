import { buttonXDriverFactory as publicDriverFactory } from '../ButtonX.uni.driver';

export const buttonXPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
