import { Row, Container, IconButton, PixelIcon, Br, Text } from "../../dist";
import emptyCallback from "../../function/emptyCallback";
import { SourceCodeButton } from "../SourceCodeButton";

export const IconButtonDemo = () => {
  return (
    <Row>
        <Container title='&lt;IconButton&gt;'>

          <Text>Buttons that only consist of icons are used in Toolbars and Menus. For a perfect shape, the PixelIcon size needs to match the desired button size (32px, 24px or 16px):</Text>

          <Row style={{ display: 'block' }}>
            <IconButton style={{ float: 'left'}} fontColor="black" color="success" size="large" onClick={emptyCallback}>
              <PixelIcon inverted={false} name="pixelicon-checkmark" size='large' />
            </IconButton>

            <IconButton style={{ float: 'left'}} color="primary" size="medium" onClick={emptyCallback}>
              <PixelIcon inverted name="pixelicon-checkmark" size='medium' />
            </IconButton>

            <IconButton style={{ float: 'left'}} color="error" size="small" onClick={emptyCallback}>
              <PixelIcon inverted name="pixelicon-close" size='small' />
            </IconButton>
          </Row>

          <Br size="small" />

          <Text>Such icon buttons can also be composed of icons and text:</Text>

          <div style={{display: 'flex'}}>

            <IconButton color="success">
              <Text color="black" size='small'>OK</Text>
              <PixelIcon inverted={false} name="pixelicon-checkmark" size='small' />
            </IconButton>

            <IconButton color="error">
              <PixelIcon inverted name="pixelicon-close" size='small' />
              <Text size='small'>Cancel</Text>
            </IconButton>
          </div>

          <Br size="small" />
          <Text>Medium size:</Text>

          <div style={{display: 'flex'}}>

            <IconButton color="disabled">
              <Text size='medium'>OK</Text>
              <PixelIcon inverted name="pixelicon-checkmark" size='medium' />
            </IconButton>

            <IconButton color="white">
              <PixelIcon inverted={false} name="pixelicon-close" size='medium' />
              <Text size='medium' color="black">Cancel</Text>
            </IconButton>
          </div>

          <Br size="small" />
          <Text>Large size:</Text>

          <div style={{display: 'flex'}}>

            <IconButton color="primary">
              <Text size='large'>OK</Text>
              <PixelIcon inverted name="pixelicon-checkmark" size='large' />
            </IconButton>

            <IconButton color="warning">
              <PixelIcon inverted={false} name="pixelicon-close" size='large' />
              <Text size='large'>Cancel</Text>
            </IconButton>
          </div>
          
          <SourceCodeButton path="/docs/components/demos/IconButtonDemo.tsx#L12" />
        </Container>

      </Row>
  )
}
export default IconButtonDemo