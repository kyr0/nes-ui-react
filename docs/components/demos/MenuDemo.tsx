import { useState } from "react";
import { Text, Row, Heading, Br, Menu, IconButton, PixelIcon, Separator, Button } from "../../dist";
import emptyCallback from "../../function/emptyCallback";
import { SourceCodeButton } from "../SourceCodeButton";

export const MenuDemo = () => {

    const [showMoreMenu, setShowMoreMenu] = useState(false)

    return (
        <Row>
            <Heading size='large' centered>&lt;Menu&gt;</Heading>

            <Text>
            Menus are a great UI choice whenever a single button is not enough. They can be used to create a dropdown menu or a context menu.
            </Text>

            <Br size='small' />

            <Menu>
                
                <IconButton color="success" size="small" onClick={emptyCallback}>
                    <PixelIcon name="pixelicon-checkmark" size='small' />
                    <Text size='small'>Accept</Text>
                </IconButton>

                <Separator horizontal />

                <IconButton color="error" size="small" onClick={emptyCallback}>
                    <PixelIcon name="pixelicon-close" size='small' />
                    <Text size='small'>Decline</Text>
                </IconButton>

            </Menu>

            <Row style={{ position: 'relative' }}>
                <SourceCodeButton style={{ bottom: -50 }} path="/docs/components/demos/MenuDemo.tsx#L20" />
            </Row>

            <Br size='small' />

            <Heading size="medium" centered>Dropdown menu</Heading>

            <Button borderInverted color="warning" fontColor="black" onClick={() => setShowMoreMenu(true)}>More...</Button>

            <Menu open={showMoreMenu} modal onClose={() => setShowMoreMenu(false)}>
                
                <IconButton color="success" size="small" onClick={emptyCallback}>
                    <PixelIcon name="pixelicon-checkmark" size='small' />
                    <Text size='small'>Accept</Text>
                </IconButton>

                <IconButton color="primary" size="small" onClick={emptyCallback}>
                    <PixelIcon name="pixelicon-checkmark" size='small' />
                    <Text size='small'>Accept</Text>
                </IconButton>

                <Separator horizontal />

                <IconButton color="error" size="small" onClick={emptyCallback}>
                    <PixelIcon name="pixelicon-close" size='small' />
                    <Text size='small'>Decline</Text>
                </IconButton>

            </Menu>

            <Row style={{ position: 'relative' }}>
                <SourceCodeButton style={{ bottom: -50 }} path="/docs/components/demos/MenuDemo.tsx#L46" />
            </Row>

        </Row>
    )
}

export default MenuDemo