export default function monetary(value) {
  if (!value || typeof value !== 'number') return '';
  return `R$ ${parseFloat(value).toLocaleString()}`;
}
