import {useState} from 'react';
import {Counter} from '../components/Counter.tsx';
import {CounterSettings} from '../components/CounterSettings.tsx';


function App() {
    const initialValues = {
        startValue: 0,
        maxValue: 3,
    }

    const [values, setValues] = useState(initialValues);
    const [isEditing, setIsEditing] = useState(false);
    // const [error, setError] = useState(false);

    const setValuesHandler = (newStartValue: number, newMaxValue: number) => {
        setValues( {startValue: newStartValue, maxValue: newMaxValue } );
        setIsEditing(true);
    }

    return (
        <div className="App">
            <CounterSettings
                startValue={values.startValue}
                maxValue={values.maxValue}
                onSetValues={setValuesHandler}
                onEdit={setIsEditing}
            />
            <Counter startValue={values.startValue} maxValue={values.maxValue} isEditing={isEditing}/>
        </div>
    )
}

export default App;