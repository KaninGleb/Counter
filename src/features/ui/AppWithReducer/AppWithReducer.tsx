import {useState} from 'react';
import {CounterSettings, CounterV2} from '@/features/ui';
import {initialValues} from '@/common/data/initialValues.ts';


export function AppWithReducer() {
  const localStorageValues = () => {
    const savedValues = localStorage.getItem('counterSettingsValues');
    return savedValues ? JSON.parse(savedValues) : initialValues;
  }

  const [values, setValues] = useState(localStorageValues);
  const [error, setError] = useState<string>('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const setValuesHandler = (newStartValue: number, newMaxValue: number) => {
    const newValues = { startValue: newStartValue, maxValue: newMaxValue };
    setValues(newValues);
    setIsSettingsOpen(false);
    localStorage.setItem('counterSettingsValues', JSON.stringify(newValues));
  }

  return (
    <>
      {isSettingsOpen ? (
        <CounterSettings
          startValue={values.startValue}
          maxValue={values.maxValue}
          onSetValues={setValuesHandler}
          onError={setError}
          error={error}
        />
      ) : (
        <CounterV2
          startValue={values.startValue}
          maxValue={values.maxValue}
          error={error}
          setIsSettingsOpen={setIsSettingsOpen}
        />
      )}
    </>
  )
}