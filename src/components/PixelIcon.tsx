import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";
import { PixelIconName } from './interface/PixelIconName';
//import { isDarkModeActive } from "../lib/darkMode";
import { useEffect } from "react";
import React from "react";

export interface PixelIconProps extends StyleProps, IdProps {
    name: PixelIconName | string // custom pixelicon
    size?: Size
    inverted?: boolean
} 
 
export const PixelIcon = (props: PixelIconProps) => {

    //const isDarkModeActiveFlag = isDarkModeActive();
    const [isInverted, setIsInverted] = React.useState(props.inverted);
    
    useEffect(() => {
        if (typeof props.inverted === 'undefined') {
            //setIsInverted(isDarkModeActiveFlag)

        } else {
            setIsInverted(props.inverted)
        }
    }, [props.inverted/*, isDarkModeActiveFlag*/]) 

    return (
        <span id={props.id} className={`nes-ui-pixelicon nes-ui-is-size-${props.size || 'medium'} ${isInverted ? 'nes-ui-is-inverted' : ''}`} >
            <span className={props.name} style={props.style} />
        </span> 
    )
}