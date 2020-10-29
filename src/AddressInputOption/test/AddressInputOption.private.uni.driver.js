import { addressInputOptionDriverFactory as publicDriverFactory } from '../AddressInputOption.uni.driver';

export const addressInputOptionPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
