import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ContainerProps extends React.PropsWithChildren<any>, StyleProps, IdProps {
    title?: string
    alignTitle?: 'left' | 'center' | 'right'
    align?: 'left' | 'right' | 'center'
    roundedCorners?: boolean
}

const alignTitleCenterStyle = { marginLeft: 'auto', marginRight: 'auto'}

const alignTitleRightStyle = { marginLeft: 'auto', marginRight: 0 }

export const Container = ({ id, title, children, style, roundedCorners: roundedCornders, align, alignTitle, className }: ContainerProps) => (
  <section id={id} className={`nes-ui-container ${title ? 'nes-ui-with-title' : ''} ${roundedCornders ? 'nes-ui-is-rounded' : ''}  ${align ? 'nes-ui-is-' + align : ''} ${className ? className : ''}`} style={style}>
    {title && (<h3 className={`nes-ui-title`} style={{ ...style, ...alignTitle === 'center' ? alignTitleCenterStyle : alignTitle === 'right' ? alignTitleRightStyle : {}}}>{title}</h3>)}
    {children}
  </section>
)
