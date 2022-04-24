import { A, Container, Heading, PixelIcon, Text } from "../../dist";

// @ts-ignore
import styles from '../../styles/Index.module.css';
import { SourceCodeButton } from "../SourceCodeButton";

export const PixelatedImages = () => (
    <Container title='Pixelated Images'>

        <Text>
            Pixelated images can be easily drawn using pixel drawing tools. We recommend <A target="_blank" href="https://www.pixilart.com">Pixilart.com</A>.
            If you're using Pixilart, the NES color palette has already been created: <A target="_blank" href="https://www.pixilart.com/palettes/nes-52668">NES Color Palette</A>.
        </Text>

        <img alt="pixelated cursor icon" src="assets/cat_and_person.gif" width={400} height={400} />

        <Heading>Scaling imagex 2x with: .nes-ui-scale-2x</Heading>

        <div style={{ display: 'block', height: 52 }}>
            <div  className="nes-ui-scale-2x" style={{ display: 'flex', flexDirection: 'row', }}>
                <PixelIcon inverted={false} name={"pixelicon-nes-ui-logo"} size='small' style={{ marginRight: 5 }} />
            </div>
        </div>
        
        <SourceCodeButton path="/docs/components/demos/PixelatedImages.tsx#L15" />
    </Container>
)
export default PixelatedImages