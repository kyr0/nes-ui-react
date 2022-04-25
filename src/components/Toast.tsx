import { ButtonHTMLAttributes } from "react";
import { skipProps } from "../lib/skipProps";
export interface ToastProps extends ButtonHTMLAttributes<any> {
    bubblePostion?: 'left' | 'right'
}

export const ToastCustomProps = 'bubblePostion'

export const Toast = (props: ToastProps) => (
    <button {...skipProps(props, 'bubblePostion')} className={`nes-ui-toast nes-ui-from-${props.bubblePostion || 'left'} ${props.onClick ? 'nes-ui-clickable' : ''} ${props.className ? props.className : ''}`}>
        {props.children}
    </button> 
)