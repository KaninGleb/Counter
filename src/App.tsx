import {useState} from 'react';
import {AppWithState} from './AppWithState.tsx';
import {AppWithReducer} from './AppWithReducer.tsx';
import {VersionSwitcher} from './components/VersionSwitcher.tsx';


function App() {
    const localStorageVersion = () => {
        const savedValues = localStorage.getItem('counterVersion');
        return savedValues ? savedValues : 'v1';
    }

    const [version, setVersion] = useState(localStorageVersion);

    const handleVersionChange = (newVersion: string) => {
        setVersion(newVersion);
        localStorage.setItem('counterVersion', newVersion);
    }

    return (
        <div className="App">
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