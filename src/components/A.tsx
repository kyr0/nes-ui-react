import { AnchorHTMLAttributes } from "react";

export interface AProps extends AnchorHTMLAttributes<any> {
    transparent?: boolean;
    dense?: boolean;
}

export const A = (props: AProps) => 
    <a {...props} className={`nes-ui-anchor ${props.className || ''} ${props.transparent && 'nes-ui-is-transparent'} ${props.dense && 'nes-ui-is-dense'}`}>
        {props.children}
    </a>