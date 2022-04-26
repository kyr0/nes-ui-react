import { useCallback } from "react"
import { IdProps } from "./interface/IdProps"
import { InputProps } from "./interface/InputProps"
import { StyleProps } from "./interface/StyleProps"

export interface BooleanFieldDerivedProps extends StyleProps, IdProps, InputProps {
    checked?: boolean
}

export interface BooleanFieldProps extends BooleanFieldDerivedProps {
    type: 'radio' | 'checkbox'
}

export const BooleanField = (props: BooleanFieldProps) => {
 
    const onValueChange = useCallback((evt: React.SyntheticEvent) => {
        if (props.onChange) {
            props.onChange((evt.target as HTMLInputElement).checked, evt)
        }
    }, [props.onChange])
    
    return (
        <label className={`nes-ui-is-${props.type}`}>
            <input id={props.id} type={props.type} className={`nes-ui-${props.type} ${props.disabled ? 'nes-ui-is-disabled' : ''} ${props.className ? props.className : ''}`} disabled={props.disabled} name={props.name} style={props.style} value={props.value} checked={!!props.checked} onChange={props.disabled ? () => {} : onValueChange} />
            <span>{props.label}</span>
        </label>
    )
}