import { useRef, useState } from "react";
import Icon from "../ui/Icon.jsx";
import { SITE } from "../../data/site.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_MS = 2500; // humans need a few seconds; bots don't
const MAX_FILE_MB = 10;
const empty = { name: "", company: "", email: "", phone: "", project: "", message: "", botcheck: "" };

export default function EnquiryForm() {
  const [f, setF] = useState(empty);
  const [file, setFile] = useState(null);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | mailto | error
  const mounted = useRef(Date.now());

  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); if (err[k]) setErr({ ...err, [k]: "" }); };

  const validate = () => {
    const x = {};
    if (f.name.trim().length < 2) x.name = "Please enter your name.";
    if (!EMAIL_RE.test(f.email.trim())) x.email = "Please enter a valid email address.";
    if (f.project.trim().length < 3) x.project = "Please tell us about your project or requirement.";
    if (file && file.size > MAX_FILE_MB * 1024 * 1024) x.file = `Please attach a file under ${MAX_FILE_MB} MB, or email it to ${SITE.email}.`;
    setErr(x);
    return Object.keys(x).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (f.botcheck || Date.now() - mounted.current < MIN_FILL_MS) { setStatus("success"); setF(empty); return; }

    const subject = `Engineering enquiry – ${f.project.trim().slice(0, 80)}`;
    const lines = [
      `Name: ${f.name}`, `Company: ${f.company || "—"}`, `Email: ${f.email}`, `Phone: ${f.phone || "—"}`,
      `Project / Requirement: ${f.project}`, "", "Message / Scope of Work:", f.message || "—",
    ].join("\n");

    // No form-service key configured → open the visitor's email app instead.
    if (!SITE.web3formsKey) {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const body = new FormData();
      body.append("access_key", SITE.web3formsKey);
      body.append("subject", subject);
      body.append("from_name", "HEADS Website");
      body.append("replyto", f.email);
      body.append("name", f.name); body.append("company", f.company || "—"); body.append("email", f.email);
      body.append("phone", f.phone || "—"); body.append("project", f.project); body.append("message", f.message || "—");
      if (file) body.append("attachment", file);
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body, headers: { Accept: "application/json" } });
      const data = await res.json();
      if (data.success) { setStatus("success"); setF(empty); setFile(null); } else setStatus("error");
    } catch { setStatus("error"); }
  };

  if (status === "success" || status === "mailto") {
    return (
      <div className="form-done" role="status">
        <span className="form-done__icon"><Icon name="check" /></span>
        <h3>{status === "mailto" ? "Almost there" : "Enquiry sent"}</h3>
        <p>{status === "mailto"
          ? `Your email app should now be open with your enquiry ready to send to ${SITE.email}. If it did not open, please write to us directly.`
          : `Thank you – we have received your enquiry and will respond ${SITE.responseTime.toLowerCase()}.`}</p>
        <button type="button" className="btn btn--ghost" onClick={() => { setStatus("idle"); mounted.current = Date.now(); }}><span>Send another enquiry</span></button>
      </div>
    );
  }

  const field = (k, label, props = {}, required = false) => (
    <label className={`field${err[k] ? " field--err" : ""}`}>
      <span>{label}{required && <i aria-hidden="true"> *</i>}</span>
      {props.as === "textarea"
        ? <textarea rows="5" value={f[k]} onChange={set(k)} {...props.attrs} />
        : <input value={f[k]} onChange={set(k)} {...props.attrs} />}
      {err[k] && <em role="alert">{err[k]}</em>}
    </label>
  );

  return (
    <form className="form" onSubmit={submit} noValidate>
      <h2>Send an Enquiry</h2>
      <input type="text" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.botcheck} onChange={set("botcheck")} />
      <div className="form__row">
        {field("name", "Name", { attrs: { type: "text", autoComplete: "name", required: true } }, true)}
        {field("company", "Company", { attrs: { type: "text", autoComplete: "organization" } })}
      </div>
      <div className="form__row">
        {field("email", "Email", { attrs: { type: "email", autoComplete: "email", inputMode: "email", required: true } }, true)}
        {field("phone", "Phone", { attrs: { type: "tel", autoComplete: "tel", inputMode: "tel" } })}
      </div>
      {field("project", "Project / Requirement", { attrs: { type: "text", placeholder: "e.g. Detailed E&I engineering for an offshore platform", required: true } }, true)}
      {field("message", "Message / Scope of Work", { as: "textarea", attrs: { placeholder: "Facility type, location, scope, schedule…" } })}
      <label className={`field field--file${err.file ? " field--err" : ""}`}>
        <span>Attach Documents (Optional)</span>
        <input type="file" onChange={(e) => { setFile(e.target.files[0] || null); setErr({ ...err, file: "" }); }} />
        <small>{file ? `${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB)` : `Up to ${MAX_FILE_MB} MB`}</small>
        {err.file && <em role="alert">{err.file}</em>}
      </label>
      <button type="submit" className="btn btn--primary btn--lg form__submit" disabled={status === "sending"}>
        <span>{status === "sending" ? "Sending…" : "Submit Enquiry"}</span><Icon name="arrow" className="btn__icon" />
      </button>
      {status === "error" && <p className="form__error" role="alert">Something went wrong sending your enquiry. Please try again, or email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>}
    </form>
  );
}
