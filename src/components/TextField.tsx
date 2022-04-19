import { useState, useEffect } from "react"
import { IdProps } from "./interface/IdProps"
import { InputProps } from "./interface/InputProps"
import { StyleProps } from "./interface/StyleProps"

export interface TextFieldDerivedProps extends StyleProps, IdProps, InputProps {
    color?: 'none' | 'success' | 'warning' | 'error' | 'primary',
}

export interface TextFieldProps extends TextFieldDerivedProps {
    type: 'text' | 'password' | 'number' | 'file' | 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'url' | 'week' | 'search' | 'tel'
}

export const TextField = (props: TextFieldProps) => {

    const [value, setValue] = useState(props.value || '')

    const onValueChange = (evt: React.SyntheticEvent) => {
        setValue((evt.target as HTMLInputElement).value)

        if (props.onChange) {
            props.onChange((evt.target as HTMLInputElement).value, evt)
        }
    }

    useEffect(() => {
        setValue(props.value || '')
    }, [props.value])

    return (
        <div className="nes-ui-field">
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.id} autoComplete={props.autoComplete} type={props.type} className={`nes-ui-input ${props.disabled ? 'nes-ui-is-disabled' : ''} ${props.color ? 'nes-ui-is-' + props.color : ''} ${props.className || ''}`} disabled={props.disabled} name={props.name} style={props.style} value={value} onChange={props.disabled ? () => {} : onValueChange} />
        </div>
    )
}