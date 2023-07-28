import React from 'react';
import styles from './styles.module.scss';
import {Form} from '../Form';
import {Result} from '../Result';
import {useSelector} from 'react-redux';
import {RootState} from '../../slices';

export const Main: React.FC = () => {
  const nameState = useSelector((state: RootState) => state.name);

  return <div className={styles.main}>{nameState.value && !nameState.isEditMode ? <Result /> : <Form />}</div>;
};
