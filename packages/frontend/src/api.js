function buildClient() {
  return fetch().then(r => r.json());
}

export const apiInstance = buildClient();

export default apiInstance;
