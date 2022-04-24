import { Container, Checkbox, Br, Text } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const CheckboxDemo = () => (
    <Container title='&lt;Checkbox&gt;'>
        <Checkbox name="bar" value="yes" label="Yes" checked />
        <Checkbox name="bar" value="no" label="No" />
        <Br />
        <Text size="small" color="disabled">Can be disabled too:</Text>
        <Checkbox name="bar1" value="yes" label="Disabled" checked disabled />
         
        <SourceCodeButton path="/docs/components/demos/CheckboxDemo.tsx#L5" />
    </Container>
)
export default CheckboxDemo