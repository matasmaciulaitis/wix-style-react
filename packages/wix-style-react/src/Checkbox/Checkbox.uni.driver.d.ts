import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { CheckboxLabelSize } from './index';

export interface CheckboxUniDriver extends BaseUniDriver {
  click: () => Promise<void>;
  focus: () => Promise<void>;
  blur: () => Promise<void>;
  /**
   * @deprecated
   */
  hasFocusState(): Promise<string | null>;
  isChecked(): Promise<boolean>;
  isDisabled(): Promise<boolean>;
  isIndeterminate(): Promise<boolean>;
  hasError(): Promise<boolean>;
  getErrorMessage(): Promise<string>;
  getLabel(): Promise<string>;
  getLabelSize(): Promise<CheckboxLabelSize>;
}
