import React from 'react';
import styles from './styles.module.scss';
import {ProjectFormType} from './types';
import {changeMode, saveName} from '../../slices/nameSlice';
import {AppDispatch} from '../../slices';

interface IForm {
  name: string | undefined;
  dispatch: AppDispatch;
}

export const Form: React.FC<IForm> = ({name, dispatch}) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as typeof e.target & ProjectFormType;
    if (name) {
      dispatch(changeMode());
    }
    dispatch(saveName(form.name.value));
  };

  return (
    <div>
      <h1 className={styles.formTitle}>Add name and click on Save button</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Name:</span>
        </label>
        <input className={styles.formInput} id="name" defaultValue={name} required />
        <button className={styles.submitBtn} type="submit">
          {name ? 'Edit' : 'Save'}
        </button>
      </form>
    </div>
  );
};
