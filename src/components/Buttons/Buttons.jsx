import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

const Buttons = () => {
    return ( 
      <>
        <button></button>
        <AwesomeButton type="primary">Primary</AwesomeButton>
        <AwesomeButton type="secondary">Secondary</AwesomeButton>
        <AwesomeButton type="success">Success</AwesomeButton>
        <AwesomeButton type="warning">Warning</AwesomeButton>
        <AwesomeButton type="danger">Danger</AwesomeButton>
        <AwesomeButton type="info">Info</AwesomeButton>
        <AwesomeButton type="light">Light</AwesomeButton>
        <AwesomeButton type="dark">Dark</AwesomeButton>
        <AwesomeButton type="link">Link</AwesomeButton>
       </>
     );
}
 
export default Buttons; ;