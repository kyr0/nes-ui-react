import { Row, Container, IconButton, PixelIcon, Br, Text } from "../../dist";
import emptyCallback from "../../function/emptyCallback";
import { SourceCodeButton } from "../SourceCodeButton";

export const IconButtonDemo = () => (
    <Row>
        <Container title='&lt;IconButton&gt;'>

          <Text>Buttons that only consist of icons are used in Toolbars and Menus. For a perfect shape, the PixelIcon size needs to match the desired button size (32px, 24px or 16px):</Text>

          <div style={{display: 'flex'}}>
            <IconButton color="success" size="large" onClick={emptyCallback}>
              <PixelIcon name="pixelicon-checkmark" size='large' />
            </IconButton>

            <IconButton color="primary" size="medium" onClick={emptyCallback}>
              <PixelIcon name="pixelicon-checkmark" size='medium' />
            </IconButton>

            <IconButton color="error" size="small" onClick={emptyCallback}>
              <PixelIcon name="pixelicon-close" size='small' />
            </IconButton>
          </div>

          <Br size="small" />

          <Text>Such icon buttons can also be composed of icons and text:</Text>

          <div style={{display: 'flex'}}>

            <IconButton color="success">
              <Text size='small'>OK</Text>
              <PixelIcon name="pixelicon-checkmark" size='small' />
            </IconButton>

            <IconButton color="error">
              <PixelIcon name="pixelicon-close" size='small' />
              <Text size='small'>Cancel</Text>
            </IconButton>
          </div>
          
          <SourceCodeButton path="/docs/components/demos/IconButtonDemo.tsx#L12" />
        </Container>

      </Row>
)
export default IconButtonDemo