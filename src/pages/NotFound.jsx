import Button from "../components/ui/Button.jsx";
import Logo from "../components/ui/Logo.jsx";

export default function NotFound() {
  return (
    <header className="page-hero notfound" data-tone="dark">
      <div className="container notfound__inner">
        <Logo variant="mark" tone="light" className="notfound__logo" alt="" eager />
        <p className="notfound__code">404</p>
        <h1 className="page-hero__title">Page not found</h1>
        <p className="page-hero__lead">The page you are looking for does not exist or may have moved.</p>
        <div className="btn-row btn-row--center">
          <Button to="/" variant="light">Back to Home</Button>
          <Button to="/contact" variant="outline-light">Contact HEADS</Button>
        </div>
      </div>
    </header>
  );
}
