import { registerPlugin } from '@capacitor/core';

export interface UnityPlugin {
  startUnity(): Promise<void>;
  pauseUnity(): Promise<void>;
  resumeUnity(): Promise<void>;
}

const Unity = registerPlugin<UnityPlugin>('Unity');
export default Unity;
