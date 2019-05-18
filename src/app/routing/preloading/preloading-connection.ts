export function preloadingConnection(): boolean {
  const connection = navigator['connection'];

  if (connection) {
    const effectiveType = connection.effectiveType || '';

    if (connection.saveData || effectiveType.includes('2g')) {
      return false;
    }
  }

  return true;
}
