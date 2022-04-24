import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface BlockTextProps extends IdProps, StyleProps, React.PropsWithChildren<any> {
    shadow?: boolean;
    backgroundColor?: string;
}

export const BlockText = ({ id, style, children, className, shadow, backgroundColor }: BlockTextProps) => 
    <p id={id} style={{...style, backgroundColor: backgroundColor || '' }} className={`nes-ui-block-text ${shadow && 'nes-ui-is-shadow'} ${className || ''}`}>{children}</p>