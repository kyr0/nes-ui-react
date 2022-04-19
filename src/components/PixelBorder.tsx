import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface PixelBorderProps extends IdProps, StyleProps, React.PropsWithChildren<any> {
    doubleSize?: boolean;
    doubleRoundCorners?: boolean;
}

export const PixelBorder = (props: PixelBorderProps) => {
    const { id, style, children, className, doubleSize, doubleRoundCorners } = props;
    return (
        <div id={id} className={`nes-ui-pixel-border${doubleRoundCorners ? '-2x' : ''}${doubleSize ? '-2' : ''} ${className || ''}`} style={style}>{children}</div>
    );
}