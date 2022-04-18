import { TextField, TextFieldProps } from "./TextField";

export interface InputProps extends TextFieldProps { }

export const Input = ({ ...props }: InputProps) => <TextField {...props} />