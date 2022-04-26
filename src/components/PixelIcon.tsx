import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";
import { PixelIconName } from './interface/PixelIconName';

export interface PixelIconProps extends StyleProps, IdProps {
    name: PixelIconName | string // custom pixelicon
    size?: Size
    inverted?: boolean
} 
 
export const PixelIcon = (props: PixelIconProps) => {
    return (
        <span id={props.id} className={`nes-ui-pixelicon nes-ui-is-size-${props.size || 'medium'}`} >
            <span className={`${props.name} ${props.inverted ? 'nes-ui-is-inverted' : ''}`} style={props.style} />
        </span> 
    )
}