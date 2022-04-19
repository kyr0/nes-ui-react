import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface SeparatorProps extends StyleProps, IdProps {
    horizontal?: boolean;
}

export const Separator = ({ id, style, className, horizontal }: SeparatorProps) => (
    <div id={id} className={`nes-ui-separator ${className || ''} ${horizontal && 'nes-ui-is-horizontal'}`} style={style} />
)