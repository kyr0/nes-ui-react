import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface HeroProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    variant?: 'flower' | 'dash'
}

export const Hero = ({ id, style, children, className, variant }: HeroProps) => (
     <div id={id} className={`nes-ui-hero-${variant || 'dash'} ${className || ''}`} style={style}>
        {children}
    </div>
)