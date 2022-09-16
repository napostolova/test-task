let products = [
    {
        name: 'HUAWEI MATE S',
        price: '280.00',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_R2ks4ehufk4GagVHEAZqdZqOmjQvb7zrXFhJ9fFRzdCgG3bI1RDDxIbb9f9FgKm-SY&usqp=CAUttps://keysoo.bg/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_R2ks4ehufk4GagVHEAZqdZqOmjQvb7zrXFhJ9fFRzdCgG3bI1RDDxIbb9f9FgKm-SY&usqp=CAUwp-content/uploads/2021/08/huawei-p-smart-2021.jpgps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQkuJLv8Nvevpku-0BMnjrKs6H_XecL4Iwg&usqp=CAU'
    },
    {
        name: 'SONY XPERIA Z5',
        price: '550.00',
        imgUrl: 'https://mobilebulgaria.com/img/cms/527/792527.jpg'
    },
    {
        name: 'XIAOMI MI 4I',
        price: '350.00',
        imgUrl: 'https://techmart.bg/assets/techmart/img/products/27839/image/xiaomi%20mi%2011t%20meteorite%20grey_stuff_52993__pic1_1413045688.jpg'
    },
    {
        name: 'HUAWEI GB 4G',
        price: '350.00',
        imgUrl: 'https://www.yettel.bg/sites/default/files/styles/device-full/public/50994936_-_huawei_nova_9_128gb_blue_first.png?itok=qPEP3jCx'
    }, {
        name: 'IPHONE ROSE GOLD',
        price: '280.00',
        imgUrl: 'https://moven.bg/image/cache/catalog/products/Apple/iPhone%207/9-1000x1000.jpg'
    },
    {
        name: 'GALAXY CORE PRIME',
        price: '399.00',
        imgUrl: 'https://www.ping.bg/uploads/com_article/gallery/413ebebe4a3005370a0efc256758c3da969c9ea0.jpg'
    },
    {
        name: 'APPLE IPHONE 6S',
        price: '550.00',
        imgUrl: 'https://cdncloudcart.com/25880/products/images/8277/smartfon-apple-iphone-12-4-gb-64-gb-lilav-image_615ebf0453101_800x800.jpeg?1633599257.png'
    },
    {
        name: 'HUAWEI P30',
        price: '399.00',
        imgUrl: 'https://gsm-bg.eu/image/cache/catalog/huawei/huawei-p30-pro-amber-sunrise-osnowna-228x228.png'
    }
]

function deleteProduct(e) {
    e.preventDefault();
    console.log(e.target);

}

function renderProducts() {
    let container = document.getElementById('container');
    products.forEach(product => {
        let card = document.createElement('div');
        card.className = 'col-3 border';

        let cardImage = document.createElement('div');
        cardImage.className = 'img-container';

        let image = document.createElement('img');
        image.className = 'img-product';
        image.setAttribute('src', product.imgUrl);

        cardImage.appendChild(image);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardInfo = document.createElement('div');
        cardInfo.className = 'card-info';
        let name = document.createElement('p');
        name.className = 'product-name';
        name.innerHTML = product.name;

        let price = document.createElement('p');
        price.className = 'product-price';
        price.innerHTML = `$${product.price}`;

        cardInfo.appendChild(name);
        cardInfo.appendChild(price);
        cardBody.appendChild(cardInfo);

        let productButtons = document.createElement('div');
        productButtons.className = 'productButtons';
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'border';
        let deleteIcon = document.createElement('span');
        deleteIcon.className = 'material-icons';
        deleteIcon.innerHTML = 'delete';
        deleteBtn.appendChild(deleteIcon);
        deleteBtn.addEventListener('click', deleteProduct);


        let cartBtn = document.createElement('button');
        cartBtn.className = 'border';
        let cartIcon = document.createElement('span');
        cartIcon.className = 'material-icons';
        cartIcon.innerHTML = 'shopping_cart';
        cartBtn.appendChild(cartIcon);

        productButtons.appendChild(deleteBtn);
        productButtons.appendChild(cartBtn);

        cardBody.appendChild(productButtons);
        card.appendChild(cardImage);
        card.appendChild(cardBody);
        container.appendChild(card);
    });
}


// function paginate() {
//     let paginationLimit = 8;
//     let pageCount = Math.ceil(products.length / paginationLimit);
//     let currentPage;

// }