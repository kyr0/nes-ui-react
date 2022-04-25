import { ButtonHTMLAttributes } from "react";
import { getColorAsHexOrByName, NamedColor } from "./interface/Color";
import { skipProps } from "../lib/skipProps"

export interface ButtonProps extends ButtonHTMLAttributes<any> {
    color?: NamedColor
    fontColor?: NamedColor | string
    size?: 'medium' | 'small'
    borderInverted?: boolean
}

const ButtonCustomProps = ['fontColor', 'borderInverted', 'size', 'color']

export const Button = (props: ButtonProps) => (
  <div style={{ 
      ...props.style, 
      color: getColorAsHexOrByName(props.fontColor || 'inherit')
      }} 
      className={`nes-ui-button-wrapper ${props.borderInverted ? 'nes-ui-border-inverted' : ''} ${props.className ? props.className : ''}`}>

    <button {...skipProps(props, ...ButtonCustomProps, 'style')} 
      className={`nes-ui-btn nes-ui-btn-${props.color || 'normal'} nes-ui-is-size-${props.size || 'medium'} ${props.disabled && 'nes-ui-btn-disabled'}`} 
      onClick={props.disabled ? () => {} : props.onClick}>
      {props.children}
    </button>
     
  </div> 
)