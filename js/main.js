import '../css/style.css';
import 'focus-visible';

import './item-form';

let checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', (e) => {
  alert('送信成功！（※フロントエンドのみのため、実際に送信はしていません）');
  e.preventDefault();
});
