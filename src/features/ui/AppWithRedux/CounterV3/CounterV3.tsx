import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {incrementCounterV3AC, resetCounterV3AC} from '@/features/model/counterV3Reducer.ts';
import {Button} from '@/common/components/Button/Button.tsx';
import {useCounterV3Selector} from '@/app/hooks/useCounterV3Selector.ts';
import {selectCounterV3} from '@/features/model/counterV3-selectors.ts';
import s from '@/common/styles/Counter.module.css';
import btn from '@/common/styles/Button.module.css';


type CounterType = {
  startValue: number
  maxValue: number
  error: string
  setIsSettingsOpen: (isSettingOpen: boolean) => void
}

export const CounterV3 = ({ startValue, maxValue, error, setIsSettingsOpen }: CounterType) => {
  const localCurrentValue = () => {
    const savedValue = localStorage.getItem('currentValue');
    return savedValue !== null ? JSON.parse(savedValue) : startValue;
  }

  const count = useCounterV3Selector(selectCounterV3);
  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(incrementCounterV3AC());
  const resetHandler = () => dispatch(resetCounterV3AC({ startValue }));

  const setHandler = () => {
    if (setIsSettingsOpen) {
      setIsSettingsOpen(true);
    }
  }

  useEffect(() => {
    localStorage.setItem('currentValue', JSON.stringify(count));
  }, [count]);

  const isIncDisabled = !!error || count >= maxValue;
  const isResetDisabled = !!error;

  return (
    <div className={s.blockWrapper}>
      <div className={s.scoreWrapper}>
                <span className={`${s.score} ${count >= maxValue ? s.max : ''}`}>
                    {count}
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