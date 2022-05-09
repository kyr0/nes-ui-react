import { NamedColor } from "./interface/Color";
import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";

export interface TextProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    color?: NamedColor | string
    size?: Size
    centered?: boolean
    heading?: boolean
}

export const Text = ({ id, children, style, color, size, className, centered, heading }: TextProps) => (
    <p id={id} className={`nes-ui-text nes-ui-is-${heading ? '' : 'disabled'} nes-ui-is-${heading ? 'heading-' : ''} nes-ui-is-${size ? size : 'medium'} ${className ? className : ''}`} style={{...style, textAlign: centered ? 'center' : 'left', color: color || 'inherit'}}>
        {children}
    </p>
)