import {useState} from 'react';
import {Button} from './Button.tsx';

type CounterType = {
    startValue: number
    maxValue: number
}

export const Counter = ( {startValue, maxValue}: CounterType ) => {
    const [num, setNum] = useState(startValue);

    const incrementHandler = () => {
        setNum(num + 1);
    }

    const resetHandler = () => {
        setNum(startValue);
    }

    const getErrorHandler = () => {
        if (startValue >= maxValue) {
            return 'Start value must be less than the maximum value';
        } else if (startValue < 0 || maxValue < 0) {
            return 'Values must be non-negative';
        }
        return false;
    }

    const errorMessage = getErrorHandler();

    return (
        <div className={'counter'}>
            <div className={'score-wrapper'}>
                {errorMessage ? (
                    <span className={'score error'}>{errorMessage}</span>
                ) : (
                    <span className={num >= maxValue ? 'score max' : 'score'}>{num}</span>
                )}
            </div>

            <div className={'btn-wrapper'}>
                <Button
                    className={num >= maxValue || startValue > maxValue || startValue < 0 || maxValue < 0 ? 'button disabled' : 'button'}
                    title={'inc'}
                    disabled={num >= maxValue || startValue > maxValue || startValue < 0 || maxValue < 0}
                    onClick={incrementHandler}
                />
                <Button
                    className={'button'}
                    title={'reset'}
                    onClick={resetHandler}
                />
            </div>
        </div>
    )
}