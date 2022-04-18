import { Color } from "./interface/Color";
import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";

export interface IconButtonProps extends React.PropsWithChildren<any>, StyleProps, IdProps {
    disabled?: boolean
    color?: Color
    size?: Size
    inverted?: boolean
    onClick?: React.EventHandler<any>
}


export const IconButton = ({ style, children, disabled, color, onClick, id, size, inverted }: IconButtonProps) => (
  <div style={style} className={`icon-button-wrapper is-${inverted && 'inverted'}`}>
    <button id={id} className={`icon-btn btn-${color || 'normal'} is-${size || 'medium'} ${disabled && 'btn-disabled'}`} onClick={disabled ? () => {} : onClick}>
      {children}
    </button>
  </div>
)