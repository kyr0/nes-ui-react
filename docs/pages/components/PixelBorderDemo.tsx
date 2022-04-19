import { Heading, Row, Col, Text } from "../../dist";

export const PixelBorderDemo = () => (
    <>
        <Heading centered>CSS helper class: .pixel-border</Heading>

        <Row>
          <Col className="pixel-border" type="1-of-4">
            <Text size='small' centered>
              <br />
              .pixel-border
            </Text>
          </Col>
          <Col className="pixel-border-2" type="1-of-4">
            <Text size='small' centered>
              <br />
              .pixel-border-2
            </Text>
          </Col>
          <Col className="pixel-border-2x" type="1-of-4">
            <Text size='small' centered>
              <br />
              .pixel-border-2x
            </Text>
          </Col>
          <Col className="pixel-border-2x-2" type="1-of-4">
            <Text size='small' centered>
              <br />
              .pixel-border-2x-2
            </Text>
          </Col>
        </Row>
    </>
)