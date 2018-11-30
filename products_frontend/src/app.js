class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createProducts = this.createProducts.bind(this);
    this.addProducts = this.addProducts.bind(this);
  }

  attachEventListeners() {
    // document.querySelector('#product-list').addEventListener('click', this.handleEditClick);
    // document.querySelector('.Delete').addEventListener('click', this.handleDelete);
    // document.querySelector('#update-form').addEventListener('submit', this.handleFormSubmit);

    document.querySelector('#product-list').addEventListener('click', event => {
      let className = event.target.className
      if (className === 'Edit') {
        // debugger
        this.handleEditClick(event)
      } else if (className === 'Delete') {
        this.handleDelete(event)
      }
      // else if (event.target.id === "#update-form" ) {
      //   debugger
      //   this.handleFormSubmit(event)
      // }
    })
  }


  createProducts(products) {
    products.forEach(product => {
      new Product(product);
    });
      this.addProducts();
  }

    addProducts() {
      document.querySelector('#product-list').innerHTML = '';
      Product.all.forEach(
        product => (document.querySelector('#product-list').innerHTML += product.renderProduct())
      );

    }

    handleFormSubmit(e) {
      e.preventDefault();
      let editForm = document.querySelector('#edit-form')
      const id = parseInt(e.target.dataset.id);
      const product = Product.findById(id);
      debugger
      const name = document.querySelector(`#name-${e.target.dataset.id}`).innerText
      const price = document.querySelector(`#price-${e.target.dataset.id}`).innerText
      const size =  document.querySelector(`#size-${e.target.dataset.id}`).innerText
      const image =  document.querySelector(`#image-${e.target.dataset.id}`).src
      const description = document.querySelector(`#description-${e.target.dataset.id}`).innerText

      const bodyJSON = { name, price, size, image, description };
      this.adapter.updateProduct(product.id, bodyJSON).then(updatedProduct => {
        const product = Product.findById(updatedProduct.id);
        product.update(updatedProduct);
        this.addProducts();
      });
      document.body.removeChild(editForm)
    }

    handleEditClick(e) {
      // if (e.target.className === 'Edit') {
        const id = parseInt(e.target.dataset.id);
        const product = Product.findById(id);
        document.querySelector('#update').innerHTML = product.renderEditForm();
        document.querySelector('#edit-form').addEventListener('submit', this.handleFormSubmit());
      // }
    }

    handleDelete(e) {
      // if(e.target.className === 'Delete') {
        const id = parseInt(e.target.dataset.id);
        const product = Product.findById(id);
        document.querySelector('#product-list').removeChild(product);
        deleteProduct();
      // }
    }

  }
