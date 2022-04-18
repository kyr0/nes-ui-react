import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ToolbarProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    borderless?: boolean;
    roundedCorners?: boolean;
}

export const Toolbar = ({ id, children, style, className, borderless, roundedCorners }: ToolbarProps) => (
    <div className={`toolbar-wrapper ${roundedCorners === false ? '' : 'has-rounded-corners'}`}>
        <div id={id} className={`toolbar ${className || ''} ${borderless && 'is-borderless'}`} style={style}>{children}</div>
    </div>
)