export default function Button({ toadd }) {
  return (
    <button className="button" type="button" onClick={toadd}>
      Load more
    </button>
  );
}
