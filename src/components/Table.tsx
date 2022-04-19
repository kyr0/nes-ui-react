import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface TableProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    centered?: boolean
    bordered?: boolean
    tableStyle?: React.CSSProperties
}

export const Table = ({ id, style, children, tableStyle, bordered, centered, className }: TableProps) => (
    <div className={`nes-ui-table-responsive ${className || ''}`} style={style}>
        <table id={id} style={tableStyle} className={`nes-ui-table ${bordered && 'nes-ui-is-bordered'} ${centered && 'nes-ui-is-centered'}`}>
            {children}
        </table>
    </div>
)