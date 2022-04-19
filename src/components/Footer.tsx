import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface FooterProps extends StyleProps, IdProps, React.PropsWithChildren<any> {
}

export const Footer = ({ id, style, className, children }: FooterProps) => (
    <footer id={id} className={`nes-ui-footer ${className || ''}`} style={style}>{children}</footer>
)