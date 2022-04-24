import { Container, Badge, BadgeSplitted, Text } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const BadgeDmeo = () => (
    <>
        <Container title='&lt;Badge&gt;'>
          <Text>Badges indicate a status, or can represent hash tags, categories etc. The fontColor and bgColor attributes control the colors:</Text>
          <Badge backgroundColor="primary" text="Primary" color='#fff' />
          <Badge backgroundColor="error" text="Error" color='#fff' />
          <Badge backgroundColor="warning" text="Warning" />
          <Badge backgroundColor="success" text="Success"  />

          <SourceCodeButton path="/docs/components/demos/BadgeDemo.tsx#L6" />
        </Container>

        <Container title='&lt;BadgeSplitted&gt;'>
          <Text>Sometimes, a tuple of status information shall be displayed. Here, a splitted badge comes in handy. bgColorLeft and textLeft control the left-hand design:</Text>
          <BadgeSplitted textLeft='100%' backgroundColor="primary" text="OK" />
          <BadgeSplitted textLeft='!!' backgroundColor="error" text="Oh!"  />
          <BadgeSplitted textLeft='??' backgroundColor="warning" text="Ha?" />
          <BadgeSplitted textLeft=':)' backgroundColor="success" text="Yay!" />

          <SourceCodeButton path="/docs/components/demos/BadgeDemo.tsx#L16" />
        </Container>

    </>
)
export default BadgeDmeo