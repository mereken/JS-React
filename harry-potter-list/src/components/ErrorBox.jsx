export default function ErrorBox({ message }) {
  return (
    <div style={{ color: 'red', padding: '1rem', border: '1px solid red', margin: '1rem' }}>
      Error: {message}
    </div>
  );
}