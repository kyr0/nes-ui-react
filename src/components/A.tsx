import { AnchorHTMLAttributes } from "react";
import { skipProps } from "../lib/skipProps";

export interface AProps extends AnchorHTMLAttributes<any> {
    transparent?: boolean;
    dense?: boolean;
    name?: string;
}

export const ACustomProps = ['transparent', 'dense'];

export const A = (props: AProps) => 
    <a {...skipProps(props, ...ACustomProps)} className={`nes-ui-anchor ${props.className ? props.className : ''}${props.transparent ? ' nes-ui-is-transparent' : ''}${props.dense ? ' nes-ui-is-dense' : ''}`}  style={{ ...props.style, visibility: props.name ? 'hidden' : props.style?.visibility || 'inherit' }}>
        {props.children}
    </a>