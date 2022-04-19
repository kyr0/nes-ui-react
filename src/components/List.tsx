import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ListProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    styleType?: 'disc' | 'circle'
}

export const List = ({ id, style, children, styleType }: ListProps) => (
    <div className="nes-ui-lists">
        <ul id={id} className={`nes-ui-list nes-ui-is-${styleType || 'disc'}`} style={style}>
            {children}
        </ul>
    </div>
)
