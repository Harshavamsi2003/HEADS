import Icon from "./Icon.jsx";
export default function IconBadge({ name, size = "md", tone = "navy" }) {
  return <span className={`ibadge ibadge--${size} ibadge--${tone}`}><Icon name={name} /></span>;
}
