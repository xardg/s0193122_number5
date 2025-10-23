document.addEventListener('DOMContentLoaded', function () {
  const calcBtn = document.getElementById('calc-btn');
  const productSelect = document.getElementById('product');
  const quantityInput = document.getElementById('quantity');
  const result = document.getElementById('result');

  calcBtn.addEventListener('click', function () {
    const price = parseInt(productSelect.value);
    const quantity = parseInt(quantityInput.value);

    if (isNaN(price) || isNaN(quantity) || quantity <= 0) {
      result.textContent = 'Ошибка: введите корректные данные.';
      result.classList.remove('text-success');
      result.classList.add('text-danger');
      return;
    }

    const total = price * quantity;
    result.textContent = `Стоимость заказа: ${total.toLocaleString('ru-RU')} руб.`;
    result.classList.remove('text-danger');
    result.classList.add('text-success');
  });
});