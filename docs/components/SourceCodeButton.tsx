import { Button } from "../dist";

export interface IHomeProps {
    // relative path to source code file from src directory
    path: string;
}

// @ts-ignore
import styles from '../styles/Index.module.css';

export const SOURCE_CODE_BASE_URL = `https://github.com/kyr0/nes-ui-react/blob/main`

export const SourceCodeButton = ({ path }: IHomeProps) => 
    <Button borderInverted className={styles.sourceCodeButton} color="primary" onClick={() => window.open(`${SOURCE_CODE_BASE_URL}${path}`, '_blank')}>&lt;&gt;</Button>