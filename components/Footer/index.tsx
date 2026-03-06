const currentDate = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <p>
          © {currentDate} Grupo KeSoluciones. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
