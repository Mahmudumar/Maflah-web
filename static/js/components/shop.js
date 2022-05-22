import Product from '/static/js/components/product.js'

class Shop {
    constructor(scrollObj) {
        this.scrObj = scrollObj
    }
    add(...children) {

        children.forEach((product) => {
            product.querySelector('#prodimg img').addEventListener('click', (_img) => {
                let img = _img.path[0];
                //basically take the img file, duplicate it 
            });

            this.scrObj.appendChild(product);

        })
    }
    remove() {
        //just before i come up with a way to remove products from shop
    }
}

if ('content' in document.createElement('template')) {
    const clotheshop = new Shop(document.querySelector('.shop .innerdiv'));
    const prod = new Product("Blue Gown", "11,000", '/static/imgs/blue1.jpg', 'bgown1');
    const prod1 = new Product("Green Gown", "13,000", '/static/imgs/green1.jpg', 'ggown1');
    const prod2 = new Product("Caftan 5-7 yrs", "10,000", '/static/imgs/boy1.jpg', 'boy1');
    const prod3 = new Product("Caftan 8-10 yrs", "11,000", '/static/imgs/boy2.jpg', 'boy2');
    const prod4 = new Product("Yellow Gown", "14,000", '/static/imgs/yellow1.jpg', 'ygown1');
    const prod5 = new Product("Yellow Gown", "14,000", '/static/imgs/yellow2.jpg', 'ygown2');
    const prod6 = new Product("Shadda Gown", "14,000", '/static/imgs/shadda1.jpg', 'shad1');
    const prod7 = new Product("Shadda Gown", "14,000", '/static/imgs/shadda1.jpg', 'shad1');
    const prod8 = new Product("Shadda Gown", "14,000", '/static/imgs/shadda1.jpg', 'shad1');
    const prod9 = new Product("Shadda Gown", "14,000", '/static/imgs/shadda1.jpg', 'shad1');
    const prod10 = new Product("Shadda Gown", "14,000", '/static/imgs/shadda1.jpg', 'shad1');
    const prod11 = new Product("Shadda Gown", "14,000", '/static/imgs/shadda1.jpg', 'shad1');
    clotheshop.add(prod, prod1, prod2, prod3, prod4, prod5, prod6, prod7)

} else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
}

export default Shop;