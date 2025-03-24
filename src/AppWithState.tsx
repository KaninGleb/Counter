import {useState} from 'react';
import {CounterSettings} from './components/CounterSettings.tsx';
import {Counter} from './components/Counter.tsx';
import {initialValues} from './data/initialValues.ts';


export function AppWithState() {
    const localStorageValues = () => {
        const savedValues = localStorage.getItem('counterSettingsValues');
        return savedValues ? JSON.parse(savedValues) : initialValues;
    }

    const [values, setValues] = useState(localStorageValues);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState<string>('');

    const setValuesHandler = (newStartValue: number, newMaxValue: number) => {
        const newValues = {startValue: newStartValue, maxValue: newMaxValue}
        setValues(newValues);
        localStorage.setItem('counterSettingsValues', JSON.stringify(newValues));
    }

    return (
        <div className={'container'}>
            <CounterSettings
                startValue={values.startValue}
                maxValue={values.maxValue}
                onSetValues={setValuesHandler}
                onEdit={setIsEditing}
                onError={setError}
                error={error}
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