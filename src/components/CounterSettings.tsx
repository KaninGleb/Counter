import {useEffect, useState} from 'react';
import {Button} from './Button.tsx';
import checkIcon from '../assets/images/check.svg'

type CounterSettingsType = {
    startValue: number
    maxValue: number
    onSetValues: (startValue: number, maxValue: number) => void
    onEdit: (isEditing: boolean) => void
    onError: (error: string | null) => void
    error: string | null
}

export const CounterSettings = ({startValue, maxValue, onSetValues, onEdit, onError, error} : CounterSettingsType) => {
    const [localStartVal, setLocalStartValue] = useState(startValue);
    const [localMaxValue, setLocalMaxValue] = useState(maxValue);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

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
            setIsDisabled(false);
        }
    }, [localStartVal, localMaxValue, onError]);

    const setValuesHandler = () => {
        onSetValues(localStartVal, localMaxValue);
        onEdit(false);
        setIsDisabled(true);
        setIsButtonClicked(true);

        setTimeout(() => {
            setIsButtonClicked(false);
        }, 1000)
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
                    onClick={setValuesHandler}
                    disabled={!!error || isDisabled}
                    className={error || isDisabled ? 'disabled' : ''}
                >
                    {isButtonClicked ? (
                        <img className={'check-icon'} src={checkIcon} alt="Checked" width="24" height="24" />
                    ) : (
                        'Set'
                    )}
                </Button>
            </div>
        </div>
    )
}