import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ProgressProps extends StyleProps, IdProps {
    value: number | string;
    max?: number | string;
    color?: 'primary' | 'success' | 'error' | 'warning' | 'pattern';
}

export const Progress = ({ id, value, max, style, color }: ProgressProps) => (
    <progress id={id} className={`nes-ui-progress ${color && 'nes-ui-is-' + color}`} style={style} value={value} max={max}></progress>
)