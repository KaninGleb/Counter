import {useState} from 'react';
import {AppWithState} from '../features/ui/AppWithState/AppWithState.tsx';
import {AppWithReducer} from '../features/ui/AppWithReducer/AppWithReducer.tsx';
import {AppWithRedux} from '@/features/ui/AppWithRedux/AppWithRedux.tsx';
import {versionTitle} from '../common/data/versionTitle.ts';
import {VersionType} from '@/common/components/VersionSwitcher/VersionSwitcher.tsx';
import {VersionSwitcher} from '@/common/components/index.ts'
import s from './global.module.css'
import v from '@/common/styles/VersionSwitcher.module.css';


function App() {
  const localStorageVersion = (): VersionType => {
    const savedValues = localStorage.getItem('counterVersion');
    return savedValues as VersionType || 'v1';
  }

  const [version, setVersion] = useState<VersionType>(localStorageVersion);

  const handleVersionChange = (newVersion: VersionType) => {
    setVersion(newVersion);
    localStorage.setItem('counterVersion', newVersion);
  }

  return (
    <div className={s.App}>
      <div className={v.versionTitle}>
        {versionTitle[version]}
      </div>
      {version === 'v1' ? (
        <AppWithState/>
      ) : version === 'v2' ? (
        <AppWithReducer/>
      ) : (
        <AppWithRedux/>
      )}
      <VersionSwitcher currentVersion={version} onVersionChange={handleVersionChange}/>
    </div>
  )
}

export default App;