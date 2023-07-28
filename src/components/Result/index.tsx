import React from 'react';
import styles from './styles.module.scss';
import {AppDispatch, RootState} from '../../slices';
import {changeMode} from '../../slices/nameSlice';
import {useDispatch, useSelector} from 'react-redux';

export const Result: React.FC = () => {
  const name = useSelector((state: RootState) => state.name.value);
  const dispatch: AppDispatch = useDispatch();
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
