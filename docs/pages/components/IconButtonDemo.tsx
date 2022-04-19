import { Row, Container, IconButton, PixelIcon, Br, Text } from "../../dist";
import emptyCallback from "../../function/emptyCallback";

export const IconButtonDemo = () => (
    <>
    <Row>
        <Container title='&lt;IconButton&gt;'>

          <Text>Buttons that only consist of icons are used in Toolbars and Menus. For a perfect shape, the PixelIcon size needs to match the desired button size (32px, 24px or 16px):</Text>

          <div style={{display: 'flex'}}>
            <IconButton color="success" size="large" onClick={emptyCallback}>
              <PixelIcon name="pixelicon-checkmark-32" size='large' />
            </IconButton>

            <IconButton color="primary" size="medium" onClick={emptyCallback}>
              <PixelIcon name="pixelicon-checkmark-24" size='medium' />
            </IconButton>

            <IconButton color="error" size="small" onClick={emptyCallback}>
              <PixelIcon name="pixelicon-close-8" size='small' />
            </IconButton>
          </div>

          <Br size="small" />

          <Text>Such icon buttons can also be composed of icons and text:</Text>

          <div style={{display: 'flex'}}>

            <IconButton color="success">
              <Text size='small'>OK</Text>
              <PixelIcon name="pixelicon-checkmark-16" size='small' />
            </IconButton>

            <IconButton color="error">
              <PixelIcon name="pixelicon-close-8" size='small' />
              <Text size='small'>Cancel</Text>
            </IconButton>
          </div>
        </Container>

      </Row>
    </>
)
export default IconButtonDemo