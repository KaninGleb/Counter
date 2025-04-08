import {Button} from '../Button/Button.tsx';
import s from '../../styles/VersionSwitcher.module.css';


export type VersionType = 'v1' | 'v2' | 'v3';

type VersionSwitcherType = {
  currentVersion: VersionType
  onVersionChange: (version: VersionType) => void
}

export const VersionSwitcher = ({ currentVersion, onVersionChange }: VersionSwitcherType) => {
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
      <Button
        title={'V3'}
        type={currentVersion === 'v3' ? 'version-active' : 'primary'}
        onClick={() => onVersionChange('v3')}
      />
    </div>
  )
}