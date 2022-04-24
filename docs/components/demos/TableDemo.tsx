import { Container, Row, Col, Heading, Table } from "../../dist";
import { SourceCodeButton } from "../SourceCodeButton";

export const TableDemo = () => (
    <Container title="&lt;Table&gt;" alignTitle="center">
        <Row>
            <Col type='1-of-2'>
                <Heading topSpacing={false} bottomSpacing={false}>Left-aligned, borderless:</Heading>
                <Table>
                    <thead>
                        <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Funny</td>
                        <td>Games</td>
                        <td>Are made</td>
                        <td>of 8 bits</td>
                        </tr>
                        <tr>
                        <td>Good</td>
                        <td>Players</td>
                        <td>dream in</td>
                        <td>8 bit</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>

            <Col type='1-of-2'>
                <Heading topSpacing={false} bottomSpacing={false}>Centered, with borders:</Heading>
                <Table bordered centered>
                    <thead>
                        <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Funny</td>
                        <td>Games</td>
                        <td>Are made</td>
                        <td>of 8 bits</td>
                        </tr>
                        <tr>
                        <td>Good</td>
                        <td>Players</td>
                        <td>dream in</td>
                        <td>8 bit</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
        <SourceCodeButton path="/docs/components/demos/TableDemo.tsx#L9" />
     
    </Container>
)
export default TableDemo