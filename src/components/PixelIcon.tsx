import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";
import { PixelIconName } from './interface/PixelIconName';
import { useEffect } from "react";
import React from "react";
import { onDarkModeChange } from "../lib/darkMode";

export interface PixelIconProps extends StyleProps, IdProps {
    name: PixelIconName | string // custom pixelicon
    size?: Size
    inverted?: boolean
}
 
export const PixelIcon = (props: PixelIconProps) => {

    const [isInverted, setIsInverted] = React.useState(props.inverted);
    const [darkMode, setDarkMode] = React.useState(false);

    useEffect(() => {
        onDarkModeChange(setDarkMode)
    }, [])
    
    useEffect(() => {
        if (props.inverted) {
            setIsInverted(true)
        } else if (typeof props.inverted === 'undefined') {
            setIsInverted(darkMode)
        } else {
            setIsInverted(false)
        }
    }, [props.inverted, darkMode]) 
 
    return (
        <span id={props.id} className={`nes-ui-pixelicon nes-ui-is-size-${props.size || 'medium'}`} >
            <span className={`${props.name} ${isInverted ? 'nes-ui-is-inverted' : ''}`} style={props.style} />
        </span> 
    )
}