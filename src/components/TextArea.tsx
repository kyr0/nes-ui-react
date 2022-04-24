import { useEffect, useState } from "react"
import { InputProps } from "./interface/InputProps"

export interface TextAreaDerivedProps extends InputProps {
    color?: 'none' | 'success' | 'warning' | 'error'
    cols?: number
    rows?: number
}

export interface TextAreaProps extends TextAreaDerivedProps {
}

export const TextArea = (props: TextAreaProps) => {

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
            <textarea id={props.id} cols={props.cols} rows={props.rows} className={`nes-ui-textarea ${props.disabled ? 'nes-ui-is-disabled' : ''} ${props.color ? 'nes-ui-is-' + props.color : 'nes-ui-is-none'} ${props.className || ''}`} disabled={props.disabled} name={props.name} style={props.style} value={value} onChange={props.disabled ? () => {} : onValueChange} />
        </div>
    )
}