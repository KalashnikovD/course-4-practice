import './css/normalize.scss';
import './css/style.scss';
import logo from './media/logo.png'
import promotion from './media/promotion.jpg'
import blogImage1 from './media/blog-image-1.jpg'
import blogImage2 from './media/blog-image-2.jpg'
import blogImage3 from './media/blog-image-3.jpg'
import logoFooter from './media/logo-footer.png'



let navButton = document.querySelector('.icon-drop-navigation');
navButton.addEventListener('click', (event)=> {
    navButton.classList.toggle('active');
})
