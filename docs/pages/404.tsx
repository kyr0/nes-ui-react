import { Container, Heading, Text } from '../dist';

const NotFound = (): JSX.Element => (
  <Container title='ERROR'>
    <Heading>404 - Not found</Heading>
    <Text>This page does not exist.</Text>
  </Container>
);

export default NotFound;
