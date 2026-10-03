// Short branded curtain shown while the site opens: the logo appears, then the
// panel slides up to reveal the page. Pure CSS (see animations.css), contains no
// text, never blocks interaction, and is skipped for reduced-motion users.
export default function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <img src="/brand/logo-mark-light.svg" alt="" width="424" height="456" className="intro__mark" />
    </div>
  );
}
