import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {storage} from '../utils/localStorage';
import {NAME} from '../constants/common';

const initialState = {
  value: storage.get(NAME) || '',
  isEditMode: false,
};

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    saveName: (state, action: PayloadAction<string>) => {
      storage.set(NAME, action.payload);
      state.value = action.payload;
    },
    changeMode: (state) => {
      state.isEditMode = !state.isEditMode;
    },
  },
});

export const {saveName, changeMode} = nameSlice.actions;

export default nameSlice.reducer;
