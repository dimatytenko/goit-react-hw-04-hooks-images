import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import theme from '../../Theme';

export function Loader() {
  return (
    <Spinner
      type="Circles"
      color={theme.backgrounds.primary}
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}

export default Loader;
