import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ToolbarProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    borderless?: boolean;
    roundedCorners?: boolean;
}

export const Toolbar = ({ id, children, style, className, borderless, roundedCorners }: ToolbarProps) => (
    <div className={`nes-ui-toolbar-wrapper ${roundedCorners === false ? '' : 'nes-ui-has-rounded-corners'}`}>
        <div id={id} className={`nes-ui-toolbar ${className ? className : ''} ${borderless ? 'nes-ui-is-borderless' : ''}`} style={style}>{children}</div>
    </div>
)