import { useState } from "react";

function ChildComponent ({initialValue, updateParentValue}: {initialValue: number, updateParentValue: (value: number) => void}) {
    const [childValue, setChildValue] = useState(initialValue);
    const handleChildValue = () => {
        setChildValue(childValue + 1);
        updateParentValue(childValue + 1);
    }
    return (
        <div>
            <h1>Child Component</h1>
            <p>Child Value: {childValue}</p>
            <button onClick={() => handleChildValue()}>Increment</button>
        </div>
    )
}
export default ChildComponent;