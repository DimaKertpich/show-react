import { atom } from 'recoil';

const keys = {
  currentAuth: 'currentAuth',
};

const atoms = {
  currentAuthToggle: atom<boolean>({
    key: keys.currentAuth,
    default: true,
  }),
};

export const currentAuth = {
  keys,
  atoms,
};
