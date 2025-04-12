import {useState} from 'react';
import {CounterSettings} from '../CounterSettings/CounterSettings.tsx';
import {CounterV1} from './CounterV1/CounterV1.tsx';
import {initialValues} from '@/common/data/initialValues.ts';
import s from '@/app/global.module.css'


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
    <div className={s.container}>
      <CounterSettings
        startValue={values.startValue}
        maxValue={values.maxValue}
        onSetValues={setValuesHandler}
        onEdit={setIsEditing}
        onError={setError}
        error={error}
      />
      <CounterV1
        startValue={values.startValue}
        maxValue={values.maxValue}
        isEditing={isEditing}
        error={error}
      />
    </div>
  )
}