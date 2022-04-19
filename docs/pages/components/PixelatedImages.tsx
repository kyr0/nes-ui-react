import { Col, Container, Heading, PixelIcon } from "../../dist";

// @ts-ignore
import styles from '../../styles/Index.module.css';

export const PixelatedImages = () => (
    <Col type='1-of-2'>
        <Container title='Pixelated Images'>
        <img alt="pixelated cursor icon" src="/assets/cursor.png" width={100} height={100} />

        <Heading dense>Scaling (2x) with: .scale-2x</Heading>

        <div style={{ display: 'block', height: 52 }}>
            <div className="scale-2x" style={{ display: 'flex', flexDirection: 'row', }}>
            <PixelIcon name={styles.pixeliconMeowAnimated} size='small' style={{ marginRight: 5 }} />
            </div>
        </div>
        </Container>
    </Col>
)
export default PixelatedImages