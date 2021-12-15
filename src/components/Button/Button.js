import './button.css';

export default function Button({ onClickLoad }) {
  return (
    <button class="button" type="button" onClick={onClickLoad}>
      Load more
    </button>
  );
}
