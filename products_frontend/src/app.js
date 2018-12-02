class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createProducts = this.createProducts.bind(this);
    this.addProducts = this.addProducts.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
    document.querySelector('.dropdown-menu').addEventListener('click', event =>{
      let innerText = event.target.innerText;
      if(innerText === 'Create Item') {
        this.handleCreateItem(event);
        debugger
      } else if (innerText === 'Orders') {
        this.handleOrders(event);
      }
    })
    document.querySelector('#product-list').addEventListener('click', event => {
      let className = event.target.className
      if (className === 'Edit') {
        this.handleEditClick(event)
      } else if (className === 'Delete') {
        this.handleDelete(event)
      }
    })
  }

  createProducts(products) {
    products.forEach(product => {
      new Product(product);
    });
      this.addProducts();
  }

   //adds products to the DOM, resets product-list AND update div
   addProducts() {
    document.querySelector('#product-list').innerHTML = '';
    document.querySelector('#update').innerHTML = '';
      Product.all.forEach(
        product => (document.querySelector('#product-list').innerHTML += product.renderProduct())
      );
   }

   //handles my Edit Click, renders edit form
   handleEditClick(e) {
      let id = parseInt(e.target.dataset.id);
      let product = Product.findById(id);
      document.querySelector('#update').innerHTML = product.renderEditForm();
    }

    //filters after delete
    filterAfterDelete(id) {
      let updatedProducts = Product.all.filter(product => product.id !== id)
      document.querySelector('#product-list').innerHTML = '';
      updatedProducts.forEach(
        product => (document.querySelector('#product-list').innerHTML += product.renderProduct())
      );
    }

    //handles my delete click
    handleDelete(e) {
      let id = parseInt(e.target.dataset.id);
      let product = Product.findById(id);

      this.adapter.deleteProduct(product.id);
      this.filterAfterDelete(id);
    }

   //handles my Form Submission, re-renders updated product
   handleFormSubmit(e) {
      e.preventDefault();
      let id = parseInt(e.target.dataset.id);
      let product = Product.findById(id);
      const name = document.querySelector(`#name-${e.target.dataset.id}`).value
      const price = document.querySelector(`#price-${e.target.dataset.id}`).value
      const size =  document.querySelector(`#size-${e.target.dataset.id}`).value
      const image =  document.querySelector(`#image-${e.target.dataset.id}`).value
      const description = document.querySelector(`#description-${e.target.dataset.id}`).value

      const bodyJSON = { name, price, size, image, description };
      this.adapter.updateProduct(product.id, bodyJSON).then(updatedProduct => {
        const product = Product.findById(updatedProduct.id);
        product.update(updatedProduct);
        this.addProducts();
      });
    }



}//end of App.js
