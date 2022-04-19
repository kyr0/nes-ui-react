import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface HrProps extends StyleProps, IdProps {
    height?: number | string;
    color?: 'primary' | 'success' | 'error' | 'warning' | 'disabled';
}

export const Hr = ({ id, style, height, color, className }: HrProps) => (
    <hr className={`nes-ui-hr ${className || ''} nes-ui-is-${color || ''}`} id={id} style={{...style, height}} />
)