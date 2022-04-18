import { BooleanField, BooleanFieldDerivedProps } from "./BooleanField"

export interface RadioProps extends BooleanFieldDerivedProps { }

export const Radio = (props: RadioProps) => <BooleanField {...props} type="radio" />