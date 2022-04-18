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

export const Container = ({ id, title, children, style, roundedCorners: roundedCornders, align, alignTitle }: ContainerProps) => (
  <section id={id} className={`container ${title ? 'with-title' : ''} ${roundedCornders ? 'is-rounded' : ''}  ${align ? 'is-' + align : ''}`} style={style}>
    {title && (<h3 className={`title`} style={{ ...style, ...alignTitle === 'center' ? alignTitleCenterStyle : alignTitle === 'right' ? alignTitleRightStyle : {}}}>{title}</h3>)}
    {children}
  </section>
)
