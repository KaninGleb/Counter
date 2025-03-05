import {useEffect, useState} from 'react';
import {Button} from './Button.tsx';

type CounterType = {
    startValue: number
    maxValue: number
    isEditing: boolean
}

export const Counter = ( {startValue, maxValue, isEditing}: CounterType ) => {
    const [num, setNum] = useState(startValue);

    useEffect( () => {
        setNum(startValue);
    }, [startValue, maxValue]);

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
                    <span className={isEditing ? 'score editing' : (num >= maxValue ? 'score max' : 'score')}>
                        {isEditing ? 'Enter values and press «Set»' : num}
                    </span>
                )}
            </div>

            <div className={'btn-wrapper'}>
                <Button
                    title={'inc'}
                    className={num >= maxValue || startValue > maxValue || startValue < 0 || maxValue < 0 || isEditing ? 'button disabled' : 'button'}
                    disabled={num >= maxValue || startValue > maxValue || startValue < 0 ||  maxValue < 0 || isEditing}
                    onClick={incrementHandler}
                />
                <Button
                    title={'reset'}
                    className={num >= maxValue || startValue > maxValue || startValue < 0 || maxValue < 0 || isEditing ? 'button disabled' : 'button'}
                    disabled={num >= maxValue || startValue > maxValue || startValue < 0 ||  maxValue < 0 || isEditing}
                    onClick={resetHandler}
                />
            </div>
        </div>
    )
}