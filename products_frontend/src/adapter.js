class Adapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1';
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  //Get all Products
  fetchProducts() {
    return this.get(`${this.baseUrl}/products`);
  }

  get(url) {
    return fetch(url).then(res => res.json());
  }

  //Edit Products
  updateProduct(id, body) {
    return this.patch(`${this.baseUrl}/products/${id}`, body);
  }

  patch(url, body) {
    return fetch(url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(res => res.json());
  }

  //Delete products
  deleteProduct(id) {
    return this.delete(`${this.baseUrl}/products/${id}`);
  }

  delete(url) {
    return fetch(url, {
      method:'DELETE',
    })
  }

} //end of Adapter
