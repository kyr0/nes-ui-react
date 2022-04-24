import { Heading, Hr, Text } from "../../dist";

export const HrDemo = () => (
    <>
        <Heading size='large' centered>&lt;Hr color=&quot;success&quot; height=&quot;4&quot;&gt;</Heading>

        <Text color="disabled">Horizontal rulers are used to divide the UI horizontally. They can be configured to have different color and height in pixel.</Text>

        <Hr color="primary" height={1} />
        <Hr color="success" height={2} />
        <Hr />
    </>
)
export default HrDemo