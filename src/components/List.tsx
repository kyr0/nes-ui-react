import { IdProps } from "./interface/IdProps";
import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";

export interface ListProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    styleType?: 'disc' | 'circle'
    size?: Size
}

export const List = ({ id, style, children, styleType, size }: ListProps) => (
    <div className="nes-ui-lists">
        <ul id={id} className={`nes-ui-list nes-ui-is-${size || 'medium'} nes-ui-is-${styleType || 'disc'}`} style={style}>
            {children} 
        </ul>
    </div>
)
