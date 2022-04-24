import { useState } from "react";
import { Text, Row, Heading, Br, Menu, IconButton, PixelIcon, Separator, Button } from "../../dist";
import emptyCallback from "../../function/emptyCallback";

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

            <Br size='small' />

            <Heading size="medium" centered>Dropdown menu</Heading>

            <Button onClick={() => setShowMoreMenu(true)}>More...</Button>

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

        </Row>
    )
}

export default MenuDemo