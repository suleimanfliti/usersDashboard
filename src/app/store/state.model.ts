import { User } from '../users/user';

export interface State {
  users?: User[];
  currentPage?: number;
  id?: number;
  idSearch?: number;
}

export const initialState: State = {
  currentPage: 1,
  users: [],
};
