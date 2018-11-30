document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.adapter.fetchProducts().then(app.createProducts);
  app.attachEventListeners();


}); // end of DOMContentLoaded
