import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface SeparatorProps extends StyleProps, IdProps {
    horizontal?: boolean;
}

export const Separator = ({ id, style, className, horizontal }: SeparatorProps) => (
    <div id={id} className={`separator ${className || ''} ${horizontal && 'is-horizontal'}`} style={style} />
)