import {Button} from '../Button/Button.tsx';
import {vs} from '@/common/styles';


export type VersionType = 'v1' | 'v2' | 'v3';

type VersionSwitcherType = {
  currentVersion: VersionType
  onVersionChange: (version: VersionType) => void
}

export const VersionSwitcher = ({ currentVersion, onVersionChange }: VersionSwitcherType) => {
  const versions: VersionType[] = ['v1', 'v2', 'v3'];

  return (
    <div className={vs.versionWrapper}>
      {versions.map(v => (
        <Button
          key={v}
          title={v.toUpperCase()}
          type={currentVersion === v ? 'version-active' : 'primary'}
          onClick={() => onVersionChange(v)}
        />
      ))}
    </div>
  )
}