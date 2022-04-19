import { Col, Container, Row, PixelIcon, A, Text } from "../../dist";

// @ts-ignore
import styles from '../../styles/Index.module.css';

export const PixelIconDemo = () => (
    <Col type='1-of-2'>
        <Container title='&lt;PixelIcon&gt;'>

            <Row>
                <PixelIcon name={styles.pixeliconAron} size='large' style={{ marginRight: 5 }} />
                <PixelIcon name='pixelicon-checkmark-24' size="medium" style={{ marginRight: 5 }} />
                <PixelIcon name={styles.pixeliconMeowAnimated} size='small' style={{ marginRight: 5 }} />
            </Row>

            <Text>Sizes: <br />
                &nbsp;&nbsp;small: 16px<br />
                &nbsp;&nbsp;medium: 24px<br />
                &nbsp;&nbsp;large: 32px
            </Text>

            <Text>Pixel width + height: 1px</Text>

            <Text color="disabled">
                &gt; Create your own PixelIcons with&nbsp;
                <A href="https://www.pixelartcss.com/" target={"_blank"}>PixelArtCSS</A>
            </Text>
        </Container>
    </Col>
)
export default PixelIconDemo