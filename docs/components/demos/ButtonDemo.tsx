import { Row, Container, Button, Br, Text } from "../../dist";
import emptyCallback from "../../function/emptyCallback";

// @ts-ignore
import styles from '../../styles/Index.module.css';
import { SourceCodeButton } from "../SourceCodeButton";

export const ButtonDemo = () => (
    <Row>
        <Container title='&lt;Button&gt;'>
            <Text>Buttons can be created in different colors and sizes:</Text>

            <Row className={styles.applyChildrenMarginRight}>
                <Button onClick={emptyCallback}>Primary</Button>
                <Button color="success" onClick={emptyCallback} style={{ color: '#000' }}>Success</Button>
                <Button color="primary" onClick={emptyCallback}>Primary</Button>
                <Button color="warning" onClick={emptyCallback}>Warning</Button>
                <Button color="error" onClick={emptyCallback}>Error</Button>
                <Button disabled onClick={emptyCallback}>Disabled</Button>
            </Row>

            <Br size="small" />

            <Text>Small buttons:</Text>

            <Row className={styles.applyChildrenMarginRight}>
                <Button size="small" onClick={emptyCallback}>Primary</Button>
                <Button size="small" color="success" onClick={emptyCallback} style={{ color: '#000' }}>Success</Button>
                <Button size="small" color="primary" onClick={emptyCallback}>Primary</Button>
                <Button size="small" color="warning" onClick={emptyCallback}>Warning</Button>
                <Button size="small" color="error" onClick={emptyCallback}>Error</Button>
                <Button size="small" disabled onClick={emptyCallback}>Disabled</Button>
            </Row>

            <SourceCodeButton path="/docs/components/demos/ButtonDemo.tsx#L13" />
        </Container>

    </Row>
)

export default ButtonDemo