import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface MenuProps extends StyleProps, React.PropsWithChildren<any>, IdProps {
    open?: boolean;
    modal?: boolean;
    onClose?: () => void;
}

export const Menu = ({ id, children, style, className, open, modal, onClose}: MenuProps) => (
    <>
        <menu id={id} className={`menu ${className || ''} ${modal && 'is-modal'}`} style={{...style, display: open === false ? 'none' : 'flex'}}>{children}</menu>
        {modal && <div className="modal-backdrop" style={{...style, background: 'transparent', display: open === false ? 'none' : 'block'}} onClick={onClose ? onClose : () => {}} />}
    </>
)