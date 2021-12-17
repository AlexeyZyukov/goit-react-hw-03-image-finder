import { BiLoader } from 'react-icons/bi';
import Spinner from '../Spinner/Spinner';
import './button.css';

export default function Button({ onClickLoad }) {
  return (
    <button class="button" type="button" onClick={onClickLoad}>
      <BiLoader className="icon" /> <span>Load more</span>
    </button>
  );
}
