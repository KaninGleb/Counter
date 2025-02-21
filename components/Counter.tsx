import {useState} from 'react';
import {Button} from './Button.tsx';

type CounterType = {
    startValue: number
    maxValue: number
}

export const Counter = ( {startValue, maxValue}: CounterType ) => {
    const [num, setNum] = useState(startValue);

    const incrementHandler = () => {
        // if (num < maxValue) {
            setNum(num + 1);
        // }
    }

    const resetHandler = () => {
        setNum(startValue);
    }

    return (
        <div className={'counter'}>
            <span className={num >= maxValue ? 'score max' : 'score'}>{num}</span>
            <div className={'btn-wrapper'}>
                <Button
                    className={num >= maxValue ? 'button disabled' : 'button'}
                    title={'inc'}
                    disabled={num >= maxValue}
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