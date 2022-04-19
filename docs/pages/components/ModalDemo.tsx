import { useState } from "react"
import { Text, Row, Heading, Br, IconButton, PixelIcon, Modal, Header, Spacer, ModalContent, Footer } from "../../dist"

export const ModalDemo = () => {

  const [demoDialogOpen, setDemoDialogOpen] = useState(false)

    return (
        <Row>
          <Heading size='large' centered>&lt;Modal&gt;&rsquo;s</Heading>

          <Text>
            Modals allow for opening custom dialogs and prompts as an overlay. 
            They are typically used together with &lt;ModalContent&gt;, &lt;Header&gt; and &lt;Footer&gt;. 
          </Text>

          <Text>
            The properties open and onClose are relevant for controlling the presentation state.
            With backdrop and backdropClose, the background of the modal can be disabled and the modal can be closed by clicking on it.
          </Text>

          <Br size='small' />

          <IconButton color="primary" onClick={() => setDemoDialogOpen(true)}>
            <Text size='small'>Open Modal</Text>
            <PixelIcon name="pixelicon-checkmark-16" size='small' />
          </IconButton>

          <Modal open={demoDialogOpen} onClose={() => setDemoDialogOpen(false)}>
            <Header>
              <Spacer /> 
              <Heading dense>Settings</Heading>
              <Spacer /> 
              <IconButton color="error" size="small" onClick={() => setDemoDialogOpen(false)}>
                <PixelIcon name="pixelicon-close-8" size='small' />
              </IconButton>
            </Header>
            <ModalContent>This is written inside of a &lt;ModalContent&gt; component just to keep the correct distance to all sides of the modal: The &lt;Header&gt; which is above and the &lt;Footer&gt; which is holding the action buttons.</ModalContent>
            <Footer>
              <IconButton color="error" onClick={() => setDemoDialogOpen(false)}>
                <PixelIcon name="pixelicon-close-8" size='small' />
                <Text size='small'>Cancel</Text>
              </IconButton>
              <Spacer />
              <IconButton color="success" onClick={() => setDemoDialogOpen(false)}>

                <Text size='small'>Accept</Text>
              <PixelIcon name="pixelicon-checkmark-16" size='small' />
              </IconButton>
            </Footer>
          </Modal>
        </Row>
    )
}
export default ModalDemo