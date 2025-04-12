import {useEffect, useState} from 'react';
import {Button} from '@/common/components';
import checkIcon from '@/assets/images/check.svg';
import s from '@/common/styles/Counter.module.css';
import btn from '@/common/styles/Button.module.css';


type CounterSettingsType = {
    startValue: number
    maxValue: number
    onSetValues: (startValue: number, maxValue: number) => void
    onEdit?: (isEditing: boolean) => void
    onError: (error: string) => void
    error: string
}

export const CounterSettings = ({startValue, maxValue, onSetValues, onEdit, onError, error} : CounterSettingsType) => {
    const [localStartVal, setLocalStartValue] = useState(startValue);
    const [localMaxValue, setLocalMaxValue] = useState(maxValue);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect( () => {
        if (onEdit) onEdit(true);
    }, [localStartVal, localMaxValue, onEdit]);

    useEffect(() => {
        if (localStartVal < 0 || localMaxValue < 0) {
            onError('Values must be non-negative');
        } else if (localStartVal >= localMaxValue) {
            onError('Start value must be less than the maximum value');
        } else {
            onError('');
            setIsDisabled(false);
        }
    }, [localStartVal, localMaxValue, onError]);

    const setValuesHandler = () => {
        onSetValues(localStartVal, localMaxValue);
        if (onEdit) onEdit(false);
        setIsDisabled(true);
        setIsButtonClicked(true);

        setTimeout(() => {
            setIsButtonClicked(false);
        }, 1000)
    }

    return (
        <div className={s.blockWrapper}>
            <div className={s.inputsWrapper}>
                <label className={s.title}>
                    Max value:
                    <input
                        className={`${s.input} ${localMaxValue < 0 || localStartVal >= localMaxValue ? s.error : ''}`}
                        type="number"
                        value={localMaxValue}
                        onChange={(e) => setLocalMaxValue(+e.currentTarget.value)}
                    />
                </label>

                <label className={s.title}>
                    Start value:
                    <input
                        className={`${s.input} ${localStartVal < 0 ? s.error : ''}`}
                        type="number"
                        value={localStartVal}
                        onChange={(e) => setLocalStartValue(+e.currentTarget.value)}
                    />
                </label>
            </div>

            <div className={btn.btnWrapper}>
                <Button
                    onClick={setValuesHandler}
                    disabled={!!error || isDisabled}
                    className={error || isDisabled ? btn.disabledButton : ''}
                >
                    {isButtonClicked ? (
                        <img className={btn.checkIcon} src={checkIcon} alt="Checked" width="24" height="24"/>
                    ) : (
                        'Set'
                    )}
                </Button>
            </div>
        </div>
    )
}