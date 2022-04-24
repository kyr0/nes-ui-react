import { Heading, Row, Col, Container } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const GridDemo = () => (
    <>
        <Heading size='large' centered>Grid layouts with &lt;Row&gt; and &lt;Col&gt;</Heading>

        <Row>
          <Col type='1-of-2'>
            <Container roundedCorners>
              &lt;Col type=&quot;1-of-2&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-2'>
            <Container roundedCorners>
              &lt;Col type=&quot;1-of-2&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
        </Row>

        <Row>
          <Col type='1-of-3'>
            <Container roundedCorners>
              &lt;Col type=&quot;1-of-3&quot;&gt;
            </Container>
          </Col>
          <Col type='2-of-3'>
            <Container roundedCorners>
              &lt;Col type=&quot;2-of-3&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
        </Row>

        <Row>
          <Col type='1-of-4'>
            <Container roundedCorners>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-4'>
            <Container roundedCorners>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-4'>
            <Container roundedCorners>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-4'>
            <Container roundedCorners>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
        </Row>
        <Row style={{ position: 'relative' }}>
          <SourceCodeButton style={{ right: 0, bottom: -30 }} path="/docs/components/demos/GridDemo.tsx#L8" />
        </Row>

    </>
)

export default GridDemo