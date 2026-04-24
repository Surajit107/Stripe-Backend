const DEFAULT_EMAIL_HOST = 'smtp.gmail.com';
const DEFAULT_EMAIL_PORT = 587;

const parsePort = (value: string | undefined): number | undefined => {
  if (!value) return undefined;
  const n = Number(value);
  if (!Number.isInteger(n) || n <= 0 || n > 65535) return undefined;
  return n;
};

/** .env key is EAMIL_APP_PASSWORD (typo in template); EMAIL_APP_PASSWORD also supported */
export const APP_PASSWORD: string =
  process.env.EMAIL_APP_PASSWORD ?? process.env.EAMIL_APP_PASSWORD ?? '';
export const EMAIL_ID: string = process.env.EMAIL_ID ?? '';
export const EMAIL_HOST: string = process.env.EMAIL_HOST ?? DEFAULT_EMAIL_HOST;
export const EMAIL_PORT: number = parsePort(process.env.EMAIL_PORT) ?? DEFAULT_EMAIL_PORT;
