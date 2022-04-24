import { CSSProperties } from "react";
import { Button } from "../dist";

export interface IHomeProps {
    // relative path to source code file from src directory
    path: string;
    style?: CSSProperties
}

// @ts-ignore
import styles from '../styles/Index.module.css';

export const SOURCE_CODE_BASE_URL = `https://github.com/kyr0/nes-ui-react/blob/main`

export const SourceCodeButton = ({ path, style }: IHomeProps) => 
    <Button borderInverted style={style} className={styles.sourceCodeButton} color="primary" onClick={() => window.open(`${SOURCE_CODE_BASE_URL}${path}`, '_blank')}>&lt;&gt;</Button>