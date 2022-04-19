import { Heading, Row, Col, Text, PixelBorder } from "../../dist";

export const PixelBorderDemo = () => (
    <>
        <Heading centered>CSS helper class: .pixel-border</Heading>

        <Row>
          <Col type="1-of-4">
            <PixelBorder>
                <Text size='small' centered>
                    <br />
                    .pixel-border
                </Text>
            </PixelBorder>
          </Col>
          <Col type="1-of-4">
            <PixelBorder doubleSize>
                <Text size='small' centered>
                    <br />
                    .pixel-border-2
                </Text>
            </PixelBorder>
          </Col>
          <Col type="1-of-4">
            <PixelBorder doubleRoundCorners>
                <Text size='small' centered>
                <br />
                .pixel-border-2x
                </Text>
            </PixelBorder>
          </Col>
          <Col type="1-of-4">
            <PixelBorder doubleSize doubleRoundCorners>
                <Text size='small' centered>
                <br />
                .pixel-border-2x-2
                </Text>
            </PixelBorder>
          </Col>
        </Row>
    </>
)