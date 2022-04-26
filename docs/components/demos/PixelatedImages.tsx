import { A, Br, Container, Heading, PixelIcon, Text } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const PixelatedImages = () => (
    <Container title='Pixelated Images'>

        <Text>
            Pixelated images can be easily drawn using pixel drawing tools. We recommend <A target="_blank" href="https://www.pixilart.com">Pixilart.com</A>.
            If you're using Pixilart, the NES color palette has already been created: <A target="_blank" href="https://www.pixilart.com/palettes/nes-52668">NES Color Palette</A>.
        </Text>

        <img alt="pixelated cursor icon" src="https://art.pixilart.com/sr240aba1a82f28.png" width={"50%"} />
        <Br />
        <A href="https://www.pixilart.com/yowack" target="_blank">created by @yowack</A>

        <Heading>Scaling imagex 2x with: .nes-ui-scale-2x</Heading>

        <div style={{ display: 'block', height: 52 }}>
            <div  className="nes-ui-scale-2x" style={{ display: 'flex', flexDirection: 'row', }}>
                <PixelIcon inverted={false} name={"pixelicon-nes-ui-logo"} size='small' style={{ marginRight: 5 }} />
            </div>
        </div>

        <Heading>Inverting image colors with: .nes-ui-is-inverted </Heading>

        <Text>The color of any element can be inverted using the CSS helper class .nes-ui-is-inverted:</Text>

        <img className="nes-ui-is-inverted" alt="pixelated cursor icon" src="https://art.pixilart.com/sr240aba1a82f28.png" width="25%" />
        <Br />
        <A href="https://www.pixilart.com/yowack" target="_blank">created by @yowack</A>

        <SourceCodeButton path="/docs/components/demos/PixelatedImages.tsx#L15" />
    </Container>
)
export default PixelatedImages