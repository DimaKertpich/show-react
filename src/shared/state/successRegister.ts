import { atom } from 'recoil';

const keys = {
  successRegister: 'successRegister',
};

const atoms = {
  successRegisterWindow: atom<boolean>({
    key: keys.successRegister,
    default: false,
  }),
};

export const successRegister = {
  keys,
  atoms,
};
