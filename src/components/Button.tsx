import { NamedColor } from "./interface/Color";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ButtonProps extends React.PropsWithChildren<any>, StyleProps, IdProps {
    disabled?: boolean
    color?: NamedColor
    size?: 'medium' | 'small'
    borderInverted?: boolean
    onClick?: React.EventHandler<any>
}

export const Button = ({ style, children, disabled, color, onClick, id, size, borderInverted, className }: ButtonProps) => (
  <div style={style} className={`nes-ui-button-wrapper ${borderInverted ? 'nes-ui-border-inverted' : ''} ${className ? className : ''}`}>
    <button id={id} className={`nes-ui-btn nes-ui-btn-${color || 'normal'} nes-ui-is-size-${size || 'medium'} ${disabled && 'nes-ui-btn-disabled'}`} onClick={disabled ? () => {} : onClick}>
      {children}
    </button>
  </div> 
)