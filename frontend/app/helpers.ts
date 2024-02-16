export function systemURL(systemSlug: string, path: string = "") {
  const baseURL = process.env.BASE_URL;

  if (baseURL) {
    return new URL(path, `https://${systemSlug}.${baseURL}`);
  } else {
    return `/${systemSlug}${path}`;
  }
}
