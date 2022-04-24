import { Heading, Container, Row, Col, Br, Text } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const TypographyDemo = () => (
    <>
        <Heading size='large' centered>Typography</Heading>

        <Container title='&lt;Text&gt;' alignTitle="center">
          <Text>Typography is simple: There is text or headings. Every paragraph becomes a &lt;Text&gt;. A text can be centered, have a color and a size.</Text>
       
          <Row>
            <Col type='1-of-2'>
              <Text size='small'>size=&quot;small&quot;</Text>
              <Text size="medium">size=&quot;medium&quot;</Text>
              <Text size='large'>size=&quot;large&quot;</Text>
              <Text size='xlarge'>size=&quot;xlarge&quot;</Text>
            </Col>

            <Col type='1-of-2'>
              <Text color="primary">color=&quot;primary&quot;</Text>
              <Text color="success">color=&quot;success&quot;</Text>
              <Text color="warning">color=&quot;warning&quot;</Text>
              <Text color="error">color=&quot;error&quot;</Text>
              <Text color="disabled">color=&quot;disabled&quot;</Text>
            </Col>
          </Row>
          <SourceCodeButton path="/docs/components/demos/TypographyDemo.tsx#L13" />
        </Container>

        <Br size="medium" />

        <Container title='&lt;Heading&gt;' alignTitle="center">
          <Text>&lt;Heading&gt; however behaves exactly like a text, but is 25% bigger and size=&quot;xlarge&quot; is underlined. 
            Headings also have spacing that can be controlled with the attributes: dense, topBr, bottomBr.</Text>

          <Row>
            <Col type='1-of-2'>
              <Heading dense size='small'>size=&quot;small&quot;</Heading>
              <Heading dense size="medium">size=&quot;medium&quot;</Heading>
              <Heading dense size='large'>size=&quot;large&quot;</Heading>
              <Heading dense size='xlarge'>size=&quot;xlarge&quot;</Heading>
            </Col>

            <Col type='1-of-2'>
              <Heading dense color="primary">color=&quot;primary&quot;</Heading>
              <Heading dense color="success">color=&quot;success&quot;</Heading>
              <Heading dense color="warning">color=&quot;warning&quot;</Heading>
              <Heading dense color="error">color=&quot;error&quot;</Heading>
              <Heading dense color="disabled">color=&quot;disabled&quot;</Heading>
            </Col>
          </Row>
          <SourceCodeButton path="/docs/components/demos/TypographyDemo.tsx#L38" />
        </Container>
    </>
)
export default TypographyDemo