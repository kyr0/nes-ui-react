import { useState } from "react";
import { Container, Radio, Text, Br } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const RadioDemo = () => {

    const [fooYesChecked, setFooYesChecked] = useState(true);
    const [fooNoChecked, setFooNoChecked] = useState(false);

    return (
        <Container title='&lt;Radio&gt;'>
            <form>
                <Radio name="foo" value="yes" label="Yes" checked={fooYesChecked} onChange={() => {
                    setFooYesChecked(true);
                    setFooNoChecked(false);
                }} />
                <Radio name="foo" value="no" label="No" checked={fooNoChecked} onChange={() => {
                    setFooYesChecked(false);
                    setFooNoChecked(true);
                }} />

                <Br />
                <Text size="small" color="disabled">Can be disabled too:</Text>
                <Radio name="foo1" value="yes" label="Disabled" checked disabled />
            </form>
            
            <SourceCodeButton path="/docs/components/demos/RadioDemo.tsx#L6" />
        </Container>
    )
}
export default RadioDemo