import { Heading, Hr, Row, Text } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const HrDemo = () => (
    <>
        <Heading size='large' centered>&lt;Hr color=&quot;success&quot; height=&quot;4&quot;&gt;</Heading>

        <Text color="disabled">Horizontal rulers are used to divide the UI horizontally. They can be configured to have different color and height in pixel.</Text>

        <Hr color="primary" height={1} />
        <Hr color="success" height={2} />
        <Hr />
        
        <Row style={{ position: 'relative' }}>
            <SourceCodeButton style={{ bottom: -30 }} path="/docs/components/demos/HrDemo.tsx#L10" />
        </Row>
    </>
)
export default HrDemo