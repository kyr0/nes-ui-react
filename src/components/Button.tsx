import { Color } from "./interface/Color";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ButtonProps extends React.PropsWithChildren<any>, StyleProps, IdProps {
    disabled?: boolean
    color?: Color
    size?: 'medium' | 'small'
    inverted?: boolean
    onClick?: React.EventHandler<any>
}

export const Button = ({ style, children, disabled, color, onClick, id, size, inverted }: ButtonProps) => (
  <div style={style} className={`button-wrapper is-${inverted && 'inverted'}`}>
    <button id={id} className={`btn btn-${color || 'normal'} is-size-${size || 'medium'} ${disabled && 'btn-disabled'}`} onClick={disabled ? () => {} : onClick}>
      {children}
    </button>
  </div>
)