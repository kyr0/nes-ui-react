import { useState, useEffect } from "react"
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

    const [value, setValue] = useState(props.value || '')
    const [checked, setChecked] = useState<boolean>(props.checked || false)

    const onValueChange = (evt: React.SyntheticEvent) => {
        setChecked((evt.target as HTMLInputElement).checked)
        setValue((evt.target as HTMLInputElement).value)

        if (props.onChange) {
            props.onChange((evt.target as HTMLInputElement).value, evt)
        }
    }

    useEffect(() => {
        setValue(props.value || '')
        setChecked(props.checked || false)
    }, [props.value, props.checked])

    return (
        <label className={`nes-ui-is-${props.type}`}>
            <input id={props.id} type={props.type} className={`nes-ui-${props.type} ${props.disabled ? 'nes-ui-is-disabled' : ''} ${props.className || ''}`} disabled={props.disabled} name={props.name} style={props.style} value={value} checked={checked} onChange={props.disabled ? () => {} : onValueChange} />
            <span>{props.label}</span>
        </label>
    )
}