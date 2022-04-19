import { Row, Container, Button, Br, Text } from "../../dist";
import { emptyCallback } from "../function/emptyCallback";

export const ButtonDemo = () => (
    <Row>
        <Container title='&lt;Button&gt;'>
            <Text>Buttons can be created in different colors and sizes:</Text>
            <Button onClick={emptyCallback}>Primary</Button>
            <Button color="success" onClick={emptyCallback} style={{ color: '#000' }}>Success</Button>
            <Button color="primary" onClick={emptyCallback}>Primary</Button>
            <Button color="warning" onClick={emptyCallback}>Warning</Button>
            <Button color="error" onClick={emptyCallback}>Error</Button>
            <Button disabled onClick={emptyCallback}>Disabled</Button>

            <Br size="small" />

            <Text>Small buttons:</Text>

            <Button size="small" onClick={emptyCallback}>Primary</Button>
            <Button size="small" color="success" onClick={emptyCallback} style={{ color: '#000' }}>Success</Button>
            <Button size="small" color="primary" onClick={emptyCallback}>Primary</Button>
            <Button size="small" color="warning" onClick={emptyCallback}>Warning</Button>
            <Button size="small" color="error" onClick={emptyCallback}>Error</Button>
            <Button size="small" disabled onClick={emptyCallback}>Disabled</Button>
        </Container>
    </Row>
)