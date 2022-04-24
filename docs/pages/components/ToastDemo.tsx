import { Container, Toast, PixelIcon, Text } from "../../dist";

// @ts-ignore
import styles from '../../styles/Index.module.css';

export const ToastDemo = () => (
    <Container title='&lt;Toast bubblePostion="right"&gt;' alignTitle="center">
        <Toast>
            <Text>Toasts can be used to inform the user about context information. They are great for tutorials and story-telling.</Text>
        </Toast>

        <Toast id="foo" style={{ float: 'right' }} bubblePostion='right' cursor='pointer'>
        <Text size="small" color='white'>
            Okay, okay, I got it... 
        </Text>
        <PixelIcon name={styles.pixeliconMeowAnimated} size='small' style={{ marginLeft: 10 }} />
        </Toast>
    </Container>
)
export default ToastDemo