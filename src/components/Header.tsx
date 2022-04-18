import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface HeaderProps extends StyleProps, IdProps, React.PropsWithChildren<any> {
}

export const Header = ({ id, style, className, children }: HeaderProps) => (
    <header id={id} className={`header ${className || ''}`} style={style}>{children}</header>
)