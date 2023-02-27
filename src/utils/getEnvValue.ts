export function getEnvValue(key: string | null) {
  if (!key) return;
  return import.meta.env[key];
}
