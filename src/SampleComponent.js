import {useState} from "react";

function SampleComponent() {

    const [value, setValue] = useState(0)
    const [error, setError] = useState(false)
    const [incrementSize, setIncrementSize] = useState(1)

    function handleClick(operation) {
        if (operation === 'Increment') {
            if (incrementSize === 1) {
                setValue(value + 1)
            } else if (incrementSize === 2) {
                setValue(value + 2)
            } else if (incrementSize === 3) {
                setValue(value + 3)
            } else {
                setValue(value + incrementSize)
            }
            setError(false)
        } else if (operation === 'Decrement') {
            setValue(value - 1)
            setError(false)
        } else if (operation === 'Reset') {
            setValue(0)
            setIncrementSize(1)
            setError(false)
        } else {
            setError(true)
        }
    }

    function handleIncrementChange(event) {
        setIncrementSize(parseInt(event.target.value))
    }

    return (
        <div id='sampleComponent'>
            <p>Current value: {value}</p>
            <label htmlFor='incrementText'>Increment size</label>
            <input type="number" value={incrementSize} min={1} onChange={handleIncrementChange}/>
            {error && <p>lolwut. Click another button please</p>}
            <div>
                <button id='plusOne' onClick={() => handleClick('Increment')}>{value}+{incrementSize}</button>
            </div>
            <div>
                <button id='minusOne' onClick={() => handleClick('Decrement')}>{value}-{incrementSize}</button>
            </div>
            <div>
                <button id='resetToZero' onClick={() => handleClick('Reset')}>ZEROOOOO!</button>
            </div>
            <div>
                <button id='error' onClick={() => handleClick('lolwut')}>lolwut</button>
            </div>
        </div>
    )
}

export default SampleComponent