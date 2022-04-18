import { useCallback, useEffect, useState } from "react"

export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
    color?: 'none' | 'success' | 'warning' | 'error'
    singleSelect?: boolean
}

const getDefaultValue = (someValue: any, isMultiple: boolean) => {
    if (isMultiple) {
        return someValue ? someValue : []
    } else {
        return someValue ? someValue : ''
    }
}

export const Select = (props: SelectProps) => {

    const [value, setValue] = useState(getDefaultValue(props.value, props.multiple || false))

    // TODO: implement props.singleSelect === false case (multi-select)
    const onValueChange = useCallback((evt: React.SyntheticEvent) => {
        if (props.multiple) {
            setValue([(evt.target as HTMLSelectElement).value])
        } else {
            setValue((evt.target as HTMLSelectElement).value)
        }
    }, [props.multiple])

    useEffect(() => {
        setValue(props.value)
    }, [props.value, props.multiple])

    return (
        <>
            <label htmlFor={props.id || props.htmlFor}>{props.label}</label>
            <div className={`select ${props.multiple ? 'is-multiple': ''} ${props.color ? 'is-' + props.color : ''} ${props.className || ''}`}>
                <select value={value} onChange={props.disabled ? () => {} : onValueChange} disabled={props.disabled} className={`${props.disabled ? 'is-disabled' : ''}`} multiple={props.multiple} required={props.required} id={props.id || props.htmlFor}>
                    {props.children}
                </select>
            </div>
        </>
    )
}