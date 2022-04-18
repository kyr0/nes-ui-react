import { BooleanFieldDerivedProps, BooleanField } from "./BooleanField"

export interface CheckboxProps extends BooleanFieldDerivedProps { }

export const Checkbox = (props: CheckboxProps) => <BooleanField {...props} type="checkbox" />