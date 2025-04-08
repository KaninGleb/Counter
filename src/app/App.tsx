import {useState} from 'react';
import {AppWithState} from '../features/ui/AppWithState/AppWithState.tsx';
import {AppWithReducer} from '../features/ui/AppWithReducer/AppWithReducer.tsx';
import {VersionSwitcher} from '../common/components/VersionSwitcher/VersionSwitcher.tsx';
import {versionTitle} from '../common/data/versionTitle.ts';
import s from './global.module.css'
import v from './../common/styles/VersionSwitcher.module.css';


export type Version = 'v1' | 'v2';

function App() {
  const localStorageVersion = () => {
    const savedValues = localStorage.getItem('counterVersion');
    return savedValues === 'v2' ? savedValues : 'v1';
  }

  const [version, setVersion] = useState<Version>(localStorageVersion);

  const handleVersionChange = (newVersion: Version) => {
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
      ) : (
        <AppWithReducer/>
      )}
      <VersionSwitcher currentVersion={version} onVersionChange={handleVersionChange}/>
    </div>
  )
}

export default App;