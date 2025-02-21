import {useState} from 'react';
import {Counter} from '../components/Counter.tsx';
import {CounterSettings} from '../components/CounterSettings.tsx';


function App() {
    const initialValues = {
        startValue: 0,
        maxValue: 3,
    }

    const [values, setValues] = useState(initialValues);

    const setValuesHandler = (newStartValue: number, newMaxValue: number) => {
        setValues( {startValue: newStartValue, maxValue: newMaxValue } );
    }

    return (
        <div className="App">
            <CounterSettings
                startValue={values.startValue}
                maxValue={values.maxValue}
                onSetValues={setValuesHandler}
            />
            <Counter startValue={values.startValue} maxValue={values.maxValue}/>
        </div>
    )
}

export default App;