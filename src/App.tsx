import {useState} from 'react';
import {Counter} from './components/Counter.tsx';
import {CounterSettings} from './components/CounterSettings.tsx';


function App() {
    const initialValues = {
        startValue: 0,
        maxValue: 3,
    }

    const localStorageValues = () => {
        const savedValues = localStorage.getItem('counterSettingsValues');
        return savedValues ? JSON.parse(savedValues) : initialValues;
    }

    const [values, setValues] = useState(localStorageValues);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const setValuesHandler = (newStartValue: number, newMaxValue: number) => {
        const newValues = {startValue: newStartValue, maxValue: newMaxValue }
        setValues(newValues);
        localStorage.setItem('counterSettingsValues', JSON.stringify(newValues));
    }

    return (
        <div className="App">
            <CounterSettings
                startValue={values.startValue}
                maxValue={values.maxValue}
                onSetValues={setValuesHandler}
                onEdit={setIsEditing}
                onError={setError}
            />
            <Counter
                startValue={values.startValue}
                maxValue={values.maxValue}
                isEditing={isEditing}
                error={error}
            />
        </div>
    )
}

export default App;