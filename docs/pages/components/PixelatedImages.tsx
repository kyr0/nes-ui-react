import { A, Col, Container, Heading, PixelIcon, Text } from "../../dist";

// @ts-ignore
import styles from '../../styles/Index.module.css';

export const PixelatedImages = () => (
    <Col type='1-of-2'>
        <Container title='Pixelated Images'>

            <Text>
                Pixelated images can be easily drawn using pixel drawing tools. We recommend <A target="_blank" href="https://www.pixilart.com">Pixilart.com</A>.
                If you're using Pixilart, the NES color palette has already been created: <A target="_blank" href="https://www.pixilart.com/palettes/nes-52668">NES Color Palette</A>.
            </Text>
            <img alt="pixelated cursor icon" src="assets/cursor.png" width={100} height={100} />

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