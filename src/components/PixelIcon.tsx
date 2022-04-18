import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";

export type IconName = 'pixelicon-checkmark'

export interface PixelIconProps extends StyleProps, IdProps {
    name: IconName | string // custom pixelicon
    size?: Size
}

export const PixelIcon = (props: PixelIconProps) => (
    <span id={props.id} className={`pixelicon is-size-${props.size || 'medium'}`} style={props.style}>
        <span className={props.name} />
    </span>
)