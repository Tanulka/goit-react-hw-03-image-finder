import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={s.containerLoader}>
      <Loader type="Rings" color="#3f51b5" height={80} width={80} />
    </div>
  );
};
export default Spinner;
