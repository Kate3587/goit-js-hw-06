const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryItem = document.querySelector('.gallery');

const galleryImageEl = images
  .map(({ url, alt }) => `<li><img class = "gallery__picture" src=${url} alt=${alt} heigth = '250px' width = '250px' img><li>`)
  .join('');

galleryItem.insertAdjacentHTML('beforeend', galleryImageEl);

const picture = document.querySelectorAll('.gallery__picture');


galleryItem.style.display = 'flex';
galleryItem.style.justifyContent = 'center';
galleryItem.style.gap = '30px';
galleryItem.style.listStyle = 'none';


 