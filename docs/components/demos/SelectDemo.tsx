import { Container, Row, Col, Select } from "../../dist";

export const SelectDemo = () => (
    <Container title='&lt;Select&gt;' alignTitle="center">
        <Row>
        <Col type='1-of-3'>
            <Select id="difficulty" value="VETERAN" label="Difficulty:">
            <option value="" disabled hidden>Select...</option>
            <option value="EASY">EASY</option>
            <option value="VETERAN">VETERAN</option>
            <option value="HARDCORE">HARDCORE</option>
            </Select>
        </Col>

        <Col type='1-of-3'>
            <Select id="difficulty_warning" value="VETERAN" color='warning' label="Difficulty+:">
            <option value="" disabled hidden>Select...</option>
            <option value="EASY">EASY+</option>
            <option value="VETERAN">VETERAN+</option>
            <option value="HARDCORE">HARDCORE+</option>
            </Select>
        </Col>

        <Col type='1-of-3'>
            <Select id="difficulty_warning" value="VETERAN" color='error' label="Difficulty++:">
            <option value="" disabled hidden>Select...</option>
            <option value="EASY">EASY++</option>
            <option value="VETERAN">VETERAN++</option>
            <option value="HARDCORE">HARDCORE++</option>
            </Select>
        </Col>
        </Row>

        <Row>
        <Col type='1-of-2'>
            <Select id="success" value={["EASY", "VETERAN"]} disabled color='success' multiple label="Mastered:">
            <option value="" disabled hidden>Select...</option>
            <option value="EASY">EASY</option>
            <option value="VETERAN">VETERAN</option>
            <option value="HARDCORE">HARDCORE</option>
            <option value="ELDEN_RING">ELDEN RING</option>
            </Select>
        </Col>

        <Col type='1-of-2'>
            <Select id="success" value={["EASY"]} color='warning' singleSelect multiple label="Select as menu:">
            <option value="" disabled hidden>Select...</option>
            <option value="EASY">EASY</option>
            <option value="VETERAN">VETERAN</option>
            <option value="HARDCORE">HARDCORE</option>
            <option value="ELDEN_RING">ELDEN RING</option>
            </Select>
        </Col>
        </Row>
    </Container>
)
export default SelectDemo