function buildClient(basePath) {
  return {
    getOrders(data) {
      return fetch(`${basePath}/order`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((r) => r.json());
    },
    createOrder(data) {
      return fetch(`${basePath}/order`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((r) => r.json());
    },
    removeOrder(id) {
      console.log("delete method ");
      return fetch(`${basePath}/order/${id}`, {
        method: "DELETE",
      }).then((r) => r.json());
    },
  };
}

export const apiInstance = buildClient("http://localhost:3001");

export default apiInstance;
