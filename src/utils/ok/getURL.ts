export function getURL(type: 'x' | 'instagram', id: string) {
  if (type === 'x') {
    return `https://x.com/${id}`;
  } else {
    return `https://instagram.com/${id}`;
  }
}
