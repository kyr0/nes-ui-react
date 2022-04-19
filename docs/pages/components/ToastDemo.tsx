import { Container, Toast, PixelIcon, Text } from "../../dist";

// @ts-ignore
import styles from '../../styles/Index.module.css';

export const ToastDemo = () => (
    <Container title='&lt;Toast bubblePostion="right"&gt;' alignTitle="center">
        <Toast>
            <PixelIcon name={styles.pixeliconAron} size='large' style={{ marginRight: 20 }} />
            <Text>Toasts can be used to inform the user about context information. They are great for tutorials and story-telling.</Text>
        </Toast>

        <Toast id="foo" style={{ float: 'right' }} bubblePostion='right' cursor='pointer'>
        <Text size="small" color='white'>
            Okay, I guess I got it... Meow!<br />And where&lsquo;s my mouse?
        </Text>
        <PixelIcon name={styles.pixeliconMeowAnimated} size='small' style={{ marginLeft: 10 }} />
        </Toast>
    </Container>
)