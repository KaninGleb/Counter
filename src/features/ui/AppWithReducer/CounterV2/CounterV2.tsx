import {useEffect, useReducer} from 'react';
import {Button} from '@/common/components/Button/Button.tsx';
import {counterV2Reducer, IncrementCounterV2AC, ResetCounterV2AC} from '../../../model/counterV2Reducer.ts';
import s from '@/common/styles/Counter.module.css';
import btn from '@/common/styles/Button.module.css';


type CounterType = {
  startValue: number
  maxValue: number
  error: string
  setIsSettingsOpen: (isSettingOpen: boolean) => void
}

export const CounterV2 = ({ startValue, maxValue, error, setIsSettingsOpen }: CounterType) => {
  const localCurrentValue = () => {
    const savedValue = localStorage.getItem('currentValue');
    return savedValue !== null ? JSON.parse(savedValue) : startValue;
  }

  const [num, dispatchNum] = useReducer(counterV2Reducer, localCurrentValue());

  const incrementHandler = () => dispatchNum(IncrementCounterV2AC());
  const resetHandler = () => dispatchNum(ResetCounterV2AC(startValue));

  const setHandler = () => {
    if (setIsSettingsOpen) {
      setIsSettingsOpen(true);
    }
  }

  useEffect(() => {
    localStorage.setItem('currentValue', JSON.stringify(num));
  }, [num]);

  const isIncDisabled = !!error || num >= maxValue;
  const isResetDisabled = !!error;

  return (
    <div className={s.blockWrapper}>
      <div className={s.scoreWrapper}>
                <span className={`${s.score} ${num >= maxValue ? s.max : ''}`}>
                    {num}
                </span>
      </div>

      <div className={`${btn.btnWrapper} ${btn.v2}`}>
        <Button
          title={'Inc'}
          className={isIncDisabled ? btn.disabledButton : ''}
          disabled={isIncDisabled}
          onClick={incrementHandler}
        />
        <Button
          title={'Reset'}
          disabled={isResetDisabled}
          onClick={resetHandler}
        />
        <Button
          title={'Set'}
          disabled={isResetDisabled}
          onClick={setHandler}
        />
      </div>
    </div>
  )
}