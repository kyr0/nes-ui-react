import { Text, Heading, ColorPaletteNames, BlockText, Colors, Br, PixelBorder } from "../../dist";

export const ColorPaletteDemo = () => (
    <>
        <Heading size='xlarge' centered>Color Palette</Heading>

        <Text>Any NES UI had a distinct color palette that you&lsquo;ll find resembled here.</Text>
        <Text>For the sake of simplicity, the colors are named intrinsically, like: primary, success, warning, error, disabled, dark, black, white.</Text>

        <Text>On top of that, the whole NES color palette is exported for programmatic use:</Text>

        {ColorPaletteNames.map((name) => <PixelBorder style={{ marginRight: '1.4em', marginBottom: '1em', padding: 0, display: 'inline-block' }}>
            <BlockText shadow shadowInverted key={name} backgroundColor={(Colors as any)[name]} style={{ margin: 0 }}>
                {name}
            </BlockText>
        </PixelBorder>)}
      
    </>
)
export default ColorPaletteDemo