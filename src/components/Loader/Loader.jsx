// import { Blocks } from 'react-loader-spinner';

import styles from './Loader.module.css';
import React from 'react';

// const Loader = () => {
//   return (
//     <Blocks
//       visible={true}
//       height="80"
//       width="80"
//       ariaLabel="blocks-loading"
//       wrapperStyle={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         zIndex: 9999,
//       }}
//       wrapperClass="blocks-wrapper"
//     />
//   );
// };

const Loader = () => {
  return (
    <div>
      <div className={styles.center}>
  <div className={styles.ring}></div>
  <span className={styles.loading}>Loading...</span>
</div>

      
    </div>
    
    
  );
}

export default Loader;