import { Br } from "./Br";
import { IdProps } from "./interface/IdProps";
import { Text, TextProps } from "./Text";

export interface HeadingProps extends TextProps, IdProps {
    topSpacing?: boolean
    bottomSpacing?: boolean
    dense?: boolean
}

// TODO: move to CSS!
export const Heading = ({ id, children, style, color, size, centered, topSpacing, bottomSpacing, dense }: HeadingProps) => (
    <>
        {(typeof topSpacing === 'undefined' || topSpacing) && !dense && <Br size="small" />}
        <Text id={id} style={{
            ...style,
            paddingBottom: '0.5em',
            marginBottom: dense ? '0' : 'inherit',
            paddingTop: '0.5em',
            textDecoration: size === 'xlarge' ? 'underline' : 'none',
            display: 'block'
        }} centered={centered} color={color} size={size || 'small'} heading>{children || ''}</Text>
        {(typeof bottomSpacing === 'undefined' || bottomSpacing) && !dense && <Br size="small" />}
    </>
)