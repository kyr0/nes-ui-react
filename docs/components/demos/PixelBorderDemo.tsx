import { Heading, Row, Col, Text, PixelBorder } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const PixelBorderDemo = () => (
    <>
        <Heading centered>&lt;PixelBorder&gt;</Heading>

        <Text>The PixelBorder component allows to draw a pixelated border around any element.</Text>

        <Row>
          <Col type="1-of-4">
            <PixelBorder>
                <Text size='small' centered>
                    <br />
                     &lt;PixelBorder /&gt;
                </Text>
            </PixelBorder>
          </Col>
          <Col type="1-of-4">
            <PixelBorder doubleSize>
                <Text size='small' centered>
                    <br />
                     &lt;PixelBorder doubleSize /&gt;
                </Text>
            </PixelBorder>
          </Col>
          <Col type="1-of-4">
            <PixelBorder doubleRoundCorners>
                <Text size='small' centered>
                <br />
                &lt;PixelBorder doubleRoundCorners /&gt;
                </Text>
            </PixelBorder>
          </Col>
          <Col type="1-of-4">
            <PixelBorder doubleSize doubleRoundCorners>
                <Text size='small' centered>
                <br />
                &lt;PixelBorder doubleSize doubleRoundCorners /&gt;
                </Text>
            </PixelBorder>
          </Col>
        </Row>
        <Row style={{ position: 'relative' }}>
          <SourceCodeButton style={{ bottom: -40, right: 0 }} path="/docs/components/demos/PixelBorderDemo.tsx#L12" />
        </Row>
    </>
)
export default PixelBorderDemo