import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface TableProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    centered?: boolean
    bordered?: boolean
    tableStyle?: React.CSSProperties
}

export const Table = ({ id, style, children, tableStyle, bordered, centered, className }: TableProps) => (
    <div className={`table-responsive ${className || ''}`} style={style}>
        <table id={id} style={tableStyle} className={`table ${bordered && 'is-bordered'} ${centered && 'is-centered'}`}>
            {children}
        </table>
    </div>
)