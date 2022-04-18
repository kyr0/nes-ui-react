import { Color } from "./interface/Color";
import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";

export interface TextProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    color?: Color
    size?: Size
    centered?: boolean
    heading?: boolean
}

export const Text = ({ id, children, style, color, size, className, centered, heading }: TextProps) => (
    <p id={id} className={`text is-${color || (heading ? '' : 'disabled')} is-${heading ? 'heading-' : ''}${size || 'medium'} ${className || ''}`} style={{...style, textAlign: centered && 'center' || 'left'}}>
        {children}
    </p>
)