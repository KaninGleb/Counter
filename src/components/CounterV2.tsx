import {useReducer} from 'react';
import {Button} from './Button.tsx';
import {counterReducer} from '../store/counterReducer.tsx';

type CounterType = {
    startValue: number
    maxValue: number
    isEditing: boolean
    error: string
    setIsSettingsOpen: (isSettingOpen: boolean) => void
}

export const CounterV2 = ( {startValue, maxValue, isEditing, error, setIsSettingsOpen}: CounterType ) => {
    // const [num3, setNum3] = useState(startValue);
    const [num, dispatchNum] = useReducer(counterReducer, startValue);

    // useEffect( () => {
    //     setNum3(startValue);
    // }, [startValue, maxValue]);

    const incrementHandler = () => dispatchNum({ type: 'INCREMENT' });
    const resetHandler = () => dispatchNum( {type: 'RESET'} );
    const setHandler = () => {
        if (setIsSettingsOpen) {
            setIsSettingsOpen(true);
        }
    }

    const isIncDisabled = !!error || isEditing || num >= maxValue;
    const isResetDisabled = !!error || isEditing;

    return (
        <div className={'block-wrapper'}>
            <div className={'score-wrapper'}>
                {error ? (
                    <span className={'score error'}>{error}</span>
                ) : (
                    <span className={isEditing ? 'score editing' : (num >= maxValue ? 'score max' : 'score')}>
                        {isEditing ? 'Enter values and press «Set»' : num}
                    </span>
                )}
            </div>

            <div className={'btn-wrapper v2'}>
                <Button
                    title={'Inc'}
                    className={isIncDisabled ? 'disabled' : ''}
                    disabled={isIncDisabled}
                    onClick={incrementHandler}
                />
                <Button
                    title={'Reset'}
                    className={isResetDisabled ? 'disabled' : ''}
                    disabled={isResetDisabled}
                    onClick={resetHandler}
                />
                <Button
                    title={'Set'}
                    className={isResetDisabled ? 'disabled' : ''}
                    disabled={isResetDisabled}
                    onClick={setHandler}
                />
            </div>
        </div>
    )
}