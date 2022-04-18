import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface HrProps extends StyleProps, IdProps {
    height?: number | string;
    color?: 'primary' | 'success' | 'error' | 'warning' | 'disabled';
}

export const Hr = ({ id, style, height, color, className }: HrProps) => (
    <hr className={`${className || ''} is-${color || ''}`} id={id} style={{...style, height}} />
)