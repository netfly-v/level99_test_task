import React from 'react';
import 'modern-normalize';
import styles from './styles.module.scss';
import {Main} from './components/Main';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
};

export default App;
