import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

// <Button to="/contact">…</Button> (internal) · <Button href="mailto:…">…</Button> (external)
export default function Button({ to, href, variant = "primary", icon = "arrow", size, className = "", children, ...rest }) {
  const cls = `btn btn--${variant}${size ? ` btn--${size}` : ""} ${className}`.trim();
  const inner = (<><span>{children}</span>{icon && <Icon name={icon} className="btn__icon" />}</>);
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) {
    const ext = /^https?:/.test(href);
    return <a href={href} className={cls} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>{inner}</a>;
  }
  return <button type="button" className={cls} {...rest}>{inner}</button>;
}
