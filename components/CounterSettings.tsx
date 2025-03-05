import {useEffect, useState} from 'react';
import {Button} from './Button.tsx';

type CounterSettingsType = {
    startValue: number
    maxValue: number
    onSetValues: (startValue: number, maxValue: number) => void
    onEdit: (isEditing: boolean) => void
}

export const CounterSettings = ({startValue, maxValue, onSetValues, onEdit} : CounterSettingsType) => {
    const [localStartVal, setLocalStartValue] = useState(startValue);
    const [localMaxValue, setLocalMaxValue] = useState(maxValue);

    useEffect( () => {
        onEdit(true);
    }, [localStartVal, localMaxValue, onEdit]);

    const setValuesHandler = () => {
        onSetValues(localStartVal, localMaxValue);
        onEdit(false);
    }

    return (
        <div className={'counter-settings'}>
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
                    className={'button'}
                    title={'set'}
                    onClick={setValuesHandler}/>
            </div>
        </div>
    )
}