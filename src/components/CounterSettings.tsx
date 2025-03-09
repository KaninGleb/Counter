import {useEffect, useState} from 'react';
import {Button} from './Button.tsx';

type CounterSettingsType = {
    startValue: number
    maxValue: number
    onSetValues: (startValue: number, maxValue: number) => void
    onEdit: (isEditing: boolean) => void
    onError: (error: string | null) => void
}

export const CounterSettings = ({startValue, maxValue, onSetValues, onEdit, onError} : CounterSettingsType) => {
    const [localStartVal, setLocalStartValue] = useState(startValue);
    const [localMaxValue, setLocalMaxValue] = useState(maxValue);

    useEffect( () => {
        onEdit(true);
    }, [localStartVal, localMaxValue, onEdit]);

    useEffect(() => {
        if (localStartVal < 0 || localMaxValue < 0) {
            onError('Values must be non-negative');
        } else if (localStartVal >= localMaxValue) {
            onError('Start value must be less than the maximum value');
        } else {
            onError(null);
        }
    }, [localStartVal, localMaxValue, onError]);

    const setValuesHandler = () => {
        onSetValues(localStartVal, localMaxValue);
        onEdit(false);
    }

    return (
        <div className={'block-wrapper'}>
            <div className={'inputs-wrapper'}>
                <label className={'title'}>
                    Max value:
                    <input
                        className={localMaxValue < 0 || localStartVal >= localMaxValue ? 'input error' : 'input'}
                        type="number"
                        value={localMaxValue}
                        onChange={(e) => setLocalMaxValue(+e.currentTarget.value)}
                    />
                </label>

                <label className={'title'}>
                    Start value:
                    <input
                        className={localStartVal < 0 ? 'input error' : 'input'}
                        type="number"
                        value={localStartVal}
                        onChange={(e) => setLocalStartValue(+e.currentTarget.value)}
                    />
                </label>
            </div>

            <div className={'btn-wrapper'}>
                <Button
                    title={'Set'}
                    onClick={setValuesHandler}/>
            </div>
        </div>
    )
}