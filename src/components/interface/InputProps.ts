import { IdProps } from './IdProps';
import { OnChangeHandlerProps } from './OnChangeHandler';
import { StyleProps } from './StyleProps';

export interface InputProps
  extends IdProps,
    StyleProps,
    OnChangeHandlerProps<React.SyntheticEvent> {
  autoComplete?: string;
  label?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
}
