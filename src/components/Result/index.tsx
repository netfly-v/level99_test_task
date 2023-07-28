import React from 'react';
import styles from './styles.module.scss';
import {AppDispatch} from '../../slices';
import {changeMode} from '../../slices/nameSlice';

interface IResult {
  name: string;
  dispatch: AppDispatch;
}

export const Result: React.FC<IResult> = ({name, dispatch}) => {
  const onEditClick = () => dispatch(changeMode());
  return (
    <div className={styles.result}>
      <h2 className={styles.resultText}>{`Your name is: ${name}`}</h2>
      <button className={styles.editBtn} onClick={onEditClick}>
        Edit name
      </button>
    </div>
  );
};
