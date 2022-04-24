import { useState } from "react";
import { Container, Progress } from "../../dist";
import useInterval from "../../hook/useInterval";
import { SourceCodeButton } from "../SourceCodeButton";

export const ProgressDemo = () => {

    const [exmapleProgressPct, setExampleProgressPct] = useState(20)

    useInterval(
        () => {
        // Your custom logic here
        setExampleProgressPct(exmapleProgressPct + 20 <= 100 ? exmapleProgressPct + 20 : 0)
        },
        // Delay in milliseconds or null to stop it
        1000
    )
    
    return (
        <Container title='&lt;Progress value="20" max="100" color="success" /&gt;' alignTitle="center">
            <Progress value="90" max="100" />
            <Progress value={exmapleProgressPct} max="100" color='primary' />
            <Progress value="30" max="100" color='success' />
            <Progress value="10" max="100" color='warning' />
            <Progress value="50" max="100" color='error' />
            <Progress value="50" max="100" color='pattern' />
     
            <SourceCodeButton style={{ bottom: -60, right: -4 }} path="/docs/components/demos/ProgressDemo.tsx#L21" />
     
        </Container>

    )
}

export default ProgressDemo