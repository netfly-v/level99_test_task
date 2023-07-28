import React from 'react';
import styles from './styles.module.scss';
import {Form} from '../Form';
import {Result} from '../Result';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../slices';

export const Main: React.FC = () => {
  const name = useSelector((state: RootState) => state.name);
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      {name.value && !name.isEditMode ? (
        <Result name={name.value} dispatch={dispatch} />
      ) : (
        <Form name={name.value} dispatch={dispatch} />
      )}
    </div>
  );
};
