class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.image_url = data.image_url;
    this.size = data.size;
    this.price = data.price;
    Product.all.push(this);
  }

  renderProduct() {
    return `
    <ul>
      <div class="product-container">
      <div style="width:230px;margin:10px;background:#ffffff;color:#000000" class="product-frame">
        <h3 style="text-align:center;" id='name-${this.id}'>${this.name}</h3>
        <img id='image-${this.id}' src='${this.image_url}'>
        <p id='price-${this.id}'>$${this.price}.00</p>
        <p id='size-${this.id}'>Size: ${this.size}</p>
        <p id='description-${this.id}'>${this.description}</p>
        <button class="Edit" data-id=${this.id}>Edit</button>
        <button class="Delete" data-id=${this.id}>Delete</button>
      <div style="width:239px;margin:auto">
      <div style="width:96px;margin:auto">
      </div>
      </div>
      </div>
      </div>
    </ul>`;
  }

  static findById(id) {
    return this.all.find(product => product.id === id);
  }

  renderEditForm() {
    return `
    <form data-id=${this.id} id="edit-form">
      <label>Name</label>
      <p>
        <input id="name-${this.id}" type="text" value="${this.name}" />
      </p>
      <label>Description</label>
      <p>
        <textarea id="description-${this.id}'">${this.description}</textarea>
      </p>
      <label>Price</label>
      <p>
        <input id="price-${this.id}" type="number" value="${this.price}" />
      </p>
      <label>Size</label>
      <p>
        <input id="size-${this.id}" type="text" value="${this.size}" />
      </p>
      <label>Image</label>
      <p>
        <input id="image-${this.id}" type="url" value="${this.image_url}" />
      </p>
      <button type='submit'>Save Changes</button>
    </form>`;
  }

  update({ name, description, price, size, image_url }) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.size = size;
    this.image_url = image_url;
  }

}//end of Product

Product.all = [];
