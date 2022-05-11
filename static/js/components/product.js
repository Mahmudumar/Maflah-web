class Product {
    constructor(productName, productPrice, img, productId, productDescription = null) {
        this.pName = productName
        this.pPrice = productPrice
        this.pDescrip = productDescription
        this.pId = productId
        this.pImg = img
            //the template object
        var template = document.querySelector('template');

        //the product card
        this.product = template.content.cloneNode(true);

        //the product Identity (unique)
        this.prodid = this.product.querySelector('.product');
        this.prodid.setAttribute('id', this.pId);


        this.prodname = this.product.querySelector('.prodname');
        var prodimg = this.product.querySelector('#prodimg img');
        var prodprice = this.product.querySelector('.prodprice');
        var proddescrip = this.product.querySelector('.proddescrip');


        // set values for products
        prodimg.setAttribute('src', this.pImg);
        this.prodname.textContent = this.pName + '';
        prodprice.textContent += this.pPrice;
        proddescrip.textContent = this.pDescrip;
        return (this.product)
    }
    setId(id) {
        this.prodid.removeAttribute('id');
        this.prodid.setAttribute('id', id)
    }
    getId() {
        return (this.prodid.getAttribute('id') + '')
    }
}

export default Product;