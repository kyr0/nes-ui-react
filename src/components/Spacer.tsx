import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface SpacerProps extends StyleProps, IdProps {
}

export const Spacer = ({ id, style, className }: SpacerProps) => (
    <div id={id} className={`spacer ${className || ''}`} style={style} />
)