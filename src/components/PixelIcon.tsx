import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";
import { PixelIconName } from './interface/PixelIconName';

export interface PixelIconProps extends StyleProps, IdProps {
    name: PixelIconName | string // custom pixelicon
    size?: Size
}
 
export const PixelIcon = (props: PixelIconProps) => (
    <span id={props.id} className={`nes-ui-pixelicon nes-ui-is-size-${props.size || 'medium'}`} >
        <span className={props.name} style={props.style} />
    </span>
)