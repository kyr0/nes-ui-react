import { Container, Row, Col, Input, Text } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const InputDemo = () => (
    <Container title='&lt;Input color="error"&gt;' alignTitle='center'>
        <form>
            <Row>

                <Col type='1-of-2'>
                <Input type="text" autoComplete="first-name" name="firstName" value="Aron" label="First name:" />
                <Text>&nbsp;</Text>
                <Input type="password" autoComplete="current-password" color='warning' name="password" value="123" label="Password:" />
                <Text size="small" color="warning">Weak password!</Text>
                </Col>

                <Col type='1-of-2'>
                <Input type="text" autoComplete="current-email" color='error' name="email" value="info@aron-homberg.de" label="E-Mail:" />
                <Text size="small" color="error">This email already exists!</Text>

                <Input type="text" color='success' name="status" value="SUCCESS" label="Status:" disabled />
                <Text size="small" color="success">User created successfully.</Text>
                </Col>
            </Row>

            <Row>
                <Input style={{ width: 120 }} type="number" autoComplete="current-freq" color='primary' name="freq" value="440" label="Frequency (Hz):" />
            </Row>

        </form>
        <SourceCodeButton path="/docs/components/demos/InputDemo.tsx#L10" />
    </Container>
)
export default InputDemo