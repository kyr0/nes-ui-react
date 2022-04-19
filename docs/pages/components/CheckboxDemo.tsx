import { Container, Checkbox, Br, Text } from "../../dist";

export const CheckboxDemo = () => (
    <Container title='&lt;Checkbox&gt;'>
        <Checkbox name="bar" value="yes" label="Yes" checked />
        <Checkbox name="bar" value="no" label="No" />
        <Br />
        <Text size="small" color="disabled">Can be disabled too:</Text>
        <Checkbox name="bar1" value="yes" label="Disabled" checked disabled /> 
    </Container>
)
export default CheckboxDemo