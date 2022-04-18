import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface AProps extends StyleProps, IdProps, React.PropsWithChildren<any> {
    href?: string;
    target?: string;
    rel?: string;
}

export const A = ({ id, style, className, href, target, rel, children }: AProps) => 
    <a id={id} className={`anchor ${className || ''}`} href={href} ref={rel} target={target}  style={style}>{children}</a>