import {VersionType} from '@/common/components/VersionSwitcher/VersionSwitcher.tsx';


export const versionTitle: Record<VersionType, string> = {
  v1: 'Version 1 - With useState',
  v2: 'Version 2 - With useReducer',
  v3: 'Version 3 - With Redux',
}