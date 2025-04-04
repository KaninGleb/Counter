import {Button} from '../Button/Button.tsx';
import {Version} from '../../App.tsx';
import s from './VersionSwitcher.module.css';

type VersionSwitcherType = {
    currentVersion: Version
    onVersionChange: (version: Version) => void
}

export const VersionSwitcher = ({currentVersion, onVersionChange}: VersionSwitcherType) => {
    return (
        <div className={s.versionWrapper}>
            <Button
                title={'V1'}
                type={currentVersion === 'v1' ? 'version-active' : 'primary'}
                onClick={() => onVersionChange('v1')}
            />
            <Button
                title={'V2'}
                type={currentVersion === 'v2' ? 'version-active' : 'primary'}
                onClick={() => onVersionChange('v2')}
            />
        </div>
    )
}