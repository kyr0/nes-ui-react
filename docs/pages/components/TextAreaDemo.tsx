import { Container, TextArea, Row, Col } from "../../dist";

export const TextAreaDemo = () => (
    <Container title='&lt;TextArea color="success" rows="3"&gt;' alignTitle="center">
        <TextArea rows={5} name="textarea" value={`L0r3m 1p5um d0l0r s1t 4m37,\r\n
c0ns3c737ur 4d1p15c1ng 3l1t3 31337!`} />

        <Row>
        <Col type='1-of-3'>
            <TextArea rows={3} name="textarea" color='success' value={`MISSION ACCOMPLISHED!\nALL YOUR BASE BELONG TO US!`} disabled />
        </Col>

        <Col type='1-of-3'>
            <TextArea rows={3} name="textarea" color='warning' value={`MISSION ACCOMPLISHED!\nALL YOUR BASE BELONG TO US!`} disabled />
        </Col>

        <Col type='1-of-3'>
            <TextArea rows={3} name="textarea" color='error' value={`MISSION ACCOMPLISHED!\nALL YOUR BASE BELONG TO US!`} disabled />
        </Col>
        </Row>
    </Container>
)