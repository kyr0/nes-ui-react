import { NamedColor } from "./interface/Color";
import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";

export interface IconButtonProps extends React.PropsWithChildren<any>, StyleProps, IdProps {
    disabled?: boolean
    color?: NamedColor
    size?: Size
    inverted?: boolean
    onClick?: React.EventHandler<any>
}

export const IconButton = ({ style, children, disabled, color, onClick, id, size, inverted }: IconButtonProps) => (
  <div style={style} className={`nes-ui-icon-button-wrapper nes-ui-is-${inverted && 'inverted'}`}>
    <button id={id} className={`nes-ui-icon-btn nes-ui-btn-${color || 'normal'} is-${size || 'medium'} ${disabled && 'nes-ui-btn-disabled'}`} onClick={disabled ? () => {} : onClick}>
      {children}
    </button>
  </div>
)