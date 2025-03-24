import {useState} from 'react';
import {AppWithState} from './AppWithState.tsx';
import {AppWithReducer} from './AppWithReducer.tsx';
import {VersionSwitcher} from './components/VersionSwitcher/VersionSwitcher.tsx';
import s from './styles/global.module.css';
import v from './components/VersionSwitcher/VersionSwitcher.module.css';


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

    const versionTitle: Record<Version, string> = {
        v1: 'Version 1 - With useState',
        v2: 'Version 2 - With useReducer',
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