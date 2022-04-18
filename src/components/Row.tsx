import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface RowProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
}

export const Row = ({ id, children, style, className }: RowProps) => (
    <div id={id} className={`row ${className || ''}`} style={style}>{children}</div>
)