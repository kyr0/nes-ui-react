import { Container, Toast, PixelIcon, Text } from "../../dist";

// @ts-ignore
import styles from '../../styles/Index.module.css';
import { SourceCodeButton } from "../SourceCodeButton";

export const ToastDemo = () => (
    <Container title='&lt;Toast bubblePostion="right"&gt;' alignTitle="center">
        <Toast>
            <Text>Toasts can be used to inform the user about context information. They are great for tutorials and story-telling.</Text>
        </Toast>

        <Toast id="foo" style={{ float: 'right' }} bubblePostion='right'>
            <Text size="small" color='disabled'>
                Okay, okay, I got it... 
            </Text>
            <PixelIcon name={styles.pixeliconMeowAnimated} size='small' style={{ marginLeft: 10 }} />
        </Toast>
        <SourceCodeButton path="/docs/components/demos/ToastDemo.tsx#L9" />
    </Container>
)
export default ToastDemo