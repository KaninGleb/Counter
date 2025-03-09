import {useState} from 'react';
import {Counter} from './components/Counter.tsx';
import {CounterSettings} from './components/CounterSettings.tsx';
import {VersionSwitcher} from './components/VersionSwitcher.tsx';


function App() {
    const initialValues = {
        startValue: 0,
        maxValue: 3,
    }

    const localStorageValues = () => {
        const savedValues = localStorage.getItem('counterSettingsValues');
        return savedValues ? JSON.parse(savedValues) : initialValues;
    }

    const localStorageVersion = () => {
        const savedValues = localStorage.getItem('counterVersion');
        return savedValues ? savedValues : 'v1';
    }

    const [values, setValues] = useState(localStorageValues);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [version, setVersion] = useState(localStorageVersion);

    const setValuesHandler = (newStartValue: number, newMaxValue: number) => {
        const newValues = {startValue: newStartValue, maxValue: newMaxValue }
        setValues(newValues);
        localStorage.setItem('counterSettingsValues', JSON.stringify(newValues));
    }

    const handleVersionChange = (newVersion: string) => {
        setVersion(newVersion);
        localStorage.setItem('counterVersion', newVersion);
    }

    return (
        <div className="App">
            {version === 'v1' ? (
                <div className={"container"}>
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
            ) : (
                <Counter
                    startValue={values.startValue}
                    maxValue={values.maxValue}
                    isEditing={isEditing}
                    error={error}
                />
            )}

            <VersionSwitcher currentVersion={version} onVersionChange={handleVersionChange}/>
        </div>
    )
}

export default App;