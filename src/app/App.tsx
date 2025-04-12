import {useState} from 'react';
import {AppWithState, AppWithReducer, AppWithRedux} from '@/features/ui';
import {versionTitle} from '../common/data/versionTitle.ts';
import {VersionType, VersionSwitcher} from '@/common/components/index.ts'
import s from './global.module.css'
import {vs} from '@/common/styles';


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
      <div className={vs.versionTitle}>
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