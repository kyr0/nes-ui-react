import { StyleProps } from "./interface/StyleProps";

export interface ToastProps extends StyleProps, React.PropsWithChildren<any> {
    bubblePostion?: 'left' | 'right'
    cursor?: 'pointer' | 'default'
}

export const Toast = ({ className, bubblePostion, cursor, children, style }: ToastProps) => (
    <div style={style} className={`nes-ui-toast nes-ui-from-${bubblePostion || 'left'} ${cursor || ''} ${className || ''}`}>
        {children}
    </div>
)