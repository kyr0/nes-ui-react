import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ListProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    styleType?: 'disc' | 'circle'
}

export const List = ({ id, style, children, styleType }: ListProps) => (
    <div className="lists">
        <ul id={id} className={`list is-${styleType || 'disc'}`} style={style}>
            {children}
        </ul>
    </div>
)
