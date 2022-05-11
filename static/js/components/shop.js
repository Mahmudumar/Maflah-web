import Product from '/static/js/components/product.js'

class Shop {
    constructor(scrollObj) {
        this.scrObj = scrollObj
    }
    add(...children) {
        children.forEach((product) => { this.scrObj.appendChild(product); })
    }
}

if ('content' in document.createElement('template')) {
    const clotheshop = new Shop(document.querySelector('.prodscrollable'));
    const prod = new Product("Blue Gown", "11,000", '/static/imgs/blue1.jpg', 'gown1');
    const prod1 = new Product("Green Gown", "13,000", '/static/imgs/green1.jpg', 'gown2');
    const prod2 = new Product("Boubou Gown", "14,000", '/static/imgs/blue1.jpg', 'gown3');
    const prod3 = new Product("C Gown", "10,000", '/static/imgs/shadda1.jpg', 'gown4');
    clotheshop.add(prod, prod1, prod2, prod3)
} else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
}

export default Shop;