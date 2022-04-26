import { Heading, Br, Hero, Text, Row } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const HeroDemo = () => (
    <>

        <Heading size='large' centered>&lt;Hero variant=&quot;dash&quot;&gt;</Heading>

        <Text>Hero components are used to present content that should attract the users attention first. You can choose from a few border decorations.</Text>
        
        <Br size='large' />

        <Hero variant='dash'>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/Vvs7Yp_sWJ8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Hero>

        <Row style={{ position: 'relative' }}>
            <SourceCodeButton style={{ bottom: -60 }} path="/docs/components/demos/HeroDemo.tsx#L13" />
        </Row>
    </>
)
export default HeroDemo