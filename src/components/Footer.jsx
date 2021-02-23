const year = new Date();

export function Footer() {
  return (
    <footer>
      <p>Copyrights © {year.getFullYear()}</p>
    </footer>
  );
}
