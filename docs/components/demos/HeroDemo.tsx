import { Heading, Br, Hero, Text } from "../../dist";

export const HeroDemo = () => (
    <>

        <Heading size='large' centered>&lt;Hero variant=&quot;dash&quot;&gt;</Heading>

        <Text>A hero component is used to show most important content. The decoration can be set using the variant attribute.</Text>
        
        <Br size='large' />

        <Hero variant='dash'>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/nJH00XW5w-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Hero>
    </>
)
export default HeroDemo