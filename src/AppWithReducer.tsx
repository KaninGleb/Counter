import {useState} from 'react';
import {CounterV2} from './components/CounterV2.tsx';
import {CounterSettings} from './components/CounterSettings.tsx';
import {initialValues} from './data/initialValues.ts';


export function AppWithReducer() {
    const localStorageValues = () => {
        const savedValues = localStorage.getItem('counterSettingsValues');
        return savedValues ? JSON.parse(savedValues) : initialValues;
    }

    const [values, setValues] = useState(localStorageValues);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState<string>('');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const setValuesHandler = (newStartValue: number, newMaxValue: number) => {
        const newValues = {startValue: newStartValue, maxValue: newMaxValue}
        setValues(newValues);
        setIsSettingsOpen(false);
        localStorage.setItem('counterSettingsValues', JSON.stringify(newValues));
    }

    return (
        <div className="App">
            {isSettingsOpen ? (
                <CounterSettings
                    startValue={values.startValue}
                    maxValue={values.maxValue}
                    onSetValues={setValuesHandler}
                    onEdit={setIsEditing}
                    onError={setError}
                    error={error}
                />
            ) : (
                <CounterV2
                    startValue={values.startValue}
                    maxValue={values.maxValue}
                    isEditing={isEditing}
                    error={error}
                    setIsSettingsOpen={setIsSettingsOpen}
                />
            )}
        </div>
    )
}