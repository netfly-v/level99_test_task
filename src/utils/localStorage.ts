export const storage = {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  },
  has(key: string) {
    return Boolean(localStorage.getItem(key));
  },
  delete(key: string) {
    localStorage.removeItem(key);
  },
};
