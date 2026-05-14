export function getRequiredEnv(statusEnv, ...names) {
  for (const name of names) {
    const value = process.env[name] ?? statusEnv.get(name);

    if (value) {
      return value.replace(/\/$/, "");
    }
  }

  throw new Error(`Missing required environment variable: ${names.join(" or ")}`);
}
