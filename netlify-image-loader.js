export default function netlifyLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
