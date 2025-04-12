import {useCounterV3Dispatch, useCounterV3Selector} from '@/app/hooks';
import {selectCounterV3} from '@/features/model/counterV3-selectors.ts';
import {incrementCounterV3AC, resetCounterV3AC} from '@/features/model/counterV3Reducer.ts';
import {Button} from '@/common/components/Button/Button.tsx';
import s from '@/common/styles/Counter.module.css';
import btn from '@/common/styles/Button.module.css';


type CounterType = {
  startValue: number
  maxValue: number
  error: string
  setIsSettingsOpen: (isSettingOpen: boolean) => void
}

export const CounterV3 = ({ startValue, maxValue, error, setIsSettingsOpen }: CounterType) => {
  const count = useCounterV3Selector(selectCounterV3);
  const dispatch = useCounterV3Dispatch();

  const incrementHandler = () => dispatch(incrementCounterV3AC());
  const resetHandler = () => dispatch(resetCounterV3AC({ startValue }));

  const setHandler = () => {
    if (setIsSettingsOpen) {
      setIsSettingsOpen(true);
    }
  }

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