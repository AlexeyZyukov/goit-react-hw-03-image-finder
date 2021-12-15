export default function Button({ onClickLoad }) {
  return (
    <button className="button" type="button" onClick={onClickLoad}>
      Load more
    </button>
  );
}
