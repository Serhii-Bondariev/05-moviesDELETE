import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

const Buttons = () => {
    return ( 
        <AwesomeButton
      cssModule={AwesomeButtonStyles}
      type="primary"
      onPress={() => {
        // do something
      }}>
      Button
    </AwesomeButton>
     );
}
 
export default Buttons; ;