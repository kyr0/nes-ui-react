import { Text, Row, Heading, Br, Toolbar, IconButton, PixelIcon, Separator, Spacer } from "../../dist";
import emptyCallback from "../../function/emptyCallback";
import { SourceCodeButton } from "../SourceCodeButton";

export const ToolbarDemo = () => (
    <>
        <Row>
            <Heading size='large' centered>&lt;Toolbar&gt;</Heading>

            <Text>
                Toolbars are used to group buttons together. They can be used to create a navigation bar, an action toolbar, or in combination with &lt;Header&gt; or &lt;Footer&gt;:
            </Text>

            <Br size='small' />

            <Toolbar>
                
                <IconButton color="success" size="small" onClick={emptyCallback}>
                    <PixelIcon name="pixelicon-checkmark" size='small' />
                </IconButton>

                <Separator />

                <Spacer />
                
                <Text>small &lt;IconButton&gt;&rsquo;s, &lt;Spacer&gt;&rsquo;s and a &lt;Separator&gt;</Text>

                <Spacer />

                <IconButton color="error" size="small" onClick={emptyCallback}>
                    <PixelIcon name="pixelicon-close" size='small' />
                </IconButton>

            </Toolbar>

            <Br size='small' />

            <Heading size="medium" centered>Borderless &amp; with edged corners</Heading>

            <Toolbar borderless roundedCorners={false}>
                
                <IconButton color="success" size="small" onClick={emptyCallback}>
                    <PixelIcon name="pixelicon-checkmark" size='small' />
                </IconButton>

                <Separator />

                <Spacer />
                
                <Text>small &lt;IconButton&gt;&rsquo;s, &lt;Spacer&gt;&rsquo;s and a &lt;Separator&gt;</Text>

                <Spacer />

                <IconButton color="error" size="small" onClick={emptyCallback}>
                    <PixelIcon name="pixelicon-close" size='small' />
                </IconButton>

            </Toolbar>
        </Row>

        <Row style={{ position: 'relative' }}>
          <SourceCodeButton style={{ bottom: -40, right: 0 }} path="/docs/components/demos/ToolbarDemo.tsx#L16" />
        </Row>
    </>
)
export default ToolbarDemo;