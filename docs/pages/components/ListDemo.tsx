import { Container, Row, Col, Heading, List } from "../../dist";

export const ListDemo = () => (
    <Container title="&lt;List styleType=&quot;disc&quot;&gt;" alignTitle="center">
        <Row>
        <Col type='1-of-2'>
            <Heading dense>Circle list:</Heading>
            <List styleType='circle'>
            <li>Wake up</li>
            <li>Skip school</li>
            <li>Turn on the C64</li>
            <li>Sleep</li>
            </List>
        </Col>
        <Col type='1-of-2'>
            <Heading dense>Disc list:</Heading>
            <List styleType='disc'>
            <li>Wake up</li>
            <li>Skip school</li>
            <li>Turn on the C64</li>
            <li>Sleep</li>
            </List>
        </Col>
        </Row>
    </Container>
)