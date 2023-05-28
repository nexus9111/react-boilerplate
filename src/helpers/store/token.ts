import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authToken: any = atom({
  key: "authToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
