// 読み込みのみ
const vintageBackbagSalePrice = parseFloat(
  document
    .getElementById('vintage-backbag-sale-price')
    .textContent.replace('$', ''),
);
const leviShoesSalePrice = parseFloat(
  document.getElementById('levi-shoes-sale-price').textContent.replace('$', ''),
);
const shipping = parseInt(
  document.getElementById('shipping').textContent.replace('$', ''),
);

// ----

const vintageBackbagNum = document.getElementById('vintage-backbag-num');
const vintageBackbagMinusButton = document.getElementById(
  'vintage-backbag-minus',
);
const vintageBackbagPlusButton = document.getElementById(
  'vintage-backbag-plus',
);

const leviShoesNum = document.getElementById('levi-shoes-num');
const leviShoesMinusButton = document.getElementById('levi-shoes-minus');
const leviShoesPlusButton = document.getElementById('levi-shoes-plus');

const total = document.getElementById('total');

/**
 * 任意の桁で四捨五入する
 * @param {number} value 四捨五入する数値
 * @param {number} digit どの桁で四捨五入するか（10→小数第1位、0.1→10の位）
 * @return {number} 四捨五入した値
 */
const customRound = (value, digit) => {
  return Math.round(value * digit) / digit;
};

/**
 * 購入合計金額を計算する
 * @returns {number} 購入合計金額
 */
const calcTotalPrice = () => {
  const vintageBackbagTotalPrice
    = vintageBackbagSalePrice * parseInt(vintageBackbagNum.textContent);
  const leviShoesTotalPrice
    = leviShoesSalePrice * parseInt(leviShoesNum.textContent);

  return customRound(
    vintageBackbagTotalPrice + leviShoesTotalPrice + shipping,
    100,
  );
};

/**
 * 購入合計金額要素の値を更新
 */
const updateTotalPrice = () => {
  total.textContent = '$' + calcTotalPrice().toString();
};

vintageBackbagMinusButton.addEventListener('click', () => {
  if (vintageBackbagNum.textContent !== '0') {
    vintageBackbagNum.textContent = parseInt(vintageBackbagNum.textContent) - 1;
    updateTotalPrice();
  }
});

vintageBackbagPlusButton.addEventListener('click', () => {
  vintageBackbagNum.textContent = parseInt(vintageBackbagNum.textContent) + 1;
  updateTotalPrice();
});

leviShoesMinusButton.addEventListener('click', () => {
  if (leviShoesNum.textContent !== '0') {
    leviShoesNum.textContent = parseInt(leviShoesNum.textContent) - 1;
    updateTotalPrice();
  }
});

leviShoesPlusButton.addEventListener('click', () => {
  leviShoesNum.textContent = parseInt(leviShoesNum.textContent) + 1;
  updateTotalPrice();
});
