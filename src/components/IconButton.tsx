import { Button, ButtonProps } from "./Button";

export interface IconButtonProps extends ButtonProps {
}

export const IconButton = (props: IconButtonProps) => <Button {...props} isIconButton>{props.children}</Button>
