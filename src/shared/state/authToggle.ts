import { atom } from 'recoil';

const keys = {
  authToggle: 'authToggle',
};

const atoms = {
  authToggleWindow: atom<boolean>({
    key: keys.authToggle,
    default: false,
  }),
};

export const authToggle = {
  keys,
  atoms,
};
