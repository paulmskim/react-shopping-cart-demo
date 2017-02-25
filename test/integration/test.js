describe('Integration Test: Full workflow', () => {
  it('should load the page and display the correct title', () => {
    expect(
      browser.url('/').getTitle()
    ).to.equal('React Shopping Cart Demo');
  });

  it('should show all shop items on shop page', () => {
    expect(
      $$('.shop-item').length
    ).to.equal(9);
  });

  it('should show no items in cart', () => {
    $('.cart-button').click();

    expect(
      $$('.cart-item').length
    ).to.equal(0);

    expect(
      $('.empty-cart').getText()
    ).to.equal('Cart is empty');
  });

  it('should add item 0 to cart', () => {
    browser
      .click('.back-button')
      .click('.shop-item-0')
      .selectByValue('.item-qty', '2')
      .click('.item-add-button');

    expect(
      $('.cart-button').getText()
    ).to.equal('Cart (1)');
  });

  it('should show item 0 with quantity added in cart and the correct total', () => {
    $('.cart-button').click();

    expect(
      $$('.cart-item').length
    ).to.equal(1);

    expect(
      $('.cart-item-name').getText()
    ).to.equal('TC 2017 LS');

    expect(
      $('.cart-item-qty-select').getValue()
    ).to.equal('2');

    expect(
      $('.cart-total-value').getText()
    ).to.equal('$69.90');
  });

  it('should add item 1 to cart', () => {
    browser
      .click('.back-button')
      .click('.shop-item-1')
      .selectByValue('.item-qty', '3')
      .click('.item-add-button');

    expect(
      $('.cart-button').getText()
    ).to.equal('Cart (2)');
  });

  it('should show item 1 with quantity added in cart and the correct total', () => {
    $('.cart-button').click();

    expect(
      $$('.cart-item').length
    ).to.equal(2);

    expect(
      $('.cart-item-0 .cart-item-name').getText()
    ).to.equal('TC 2017 LS');

    expect(
      $('.cart-item-0 .cart-item-qty-select').getValue()
    ).to.equal('2');

    expect(
      $('.cart-item-1 .cart-item-name').getText()
    ).to.equal('TC 2017 Shorts');

    expect(
      $('.cart-item-1 .cart-item-qty-select').getValue()
    ).to.equal('3');

    expect(
      $('.cart-total-value').getText()
    ).to.equal('$144.90');
  });

  it('should update item 0 in cart when added again with new quantity', () => {
    browser
      .click('.back-button')
      .click('.shop-item-0')
      .selectByValue('.item-qty', '4')
      .click('.item-add-button');

    expect(
      $('.cart-button').getText()
    ).to.equal('Cart (2)');

    $('.cart-button').click();

    expect(
      $$('.cart-item').length
    ).to.equal(2);

    expect(
      $('.cart-item-0 .cart-item-name').getText()
    ).to.equal('TC 2017 LS');

    expect(
      $('.cart-item-0 .cart-item-qty-select').getValue()
    ).to.equal('4');

    expect(
      $('.cart-item-1 .cart-item-name').getText()
    ).to.equal('TC 2017 Shorts');

    expect(
      $('.cart-item-1 .cart-item-qty-select').getValue()
    ).to.equal('3');

    expect(
      $('.cart-total-value').getText()
    ).to.equal('$214.80');
  });

  it('should show item 1 with updated quantity and total when quantity is changed in cart', () => {
    browser.selectByValue('.cart-item-1 .cart-item-qty-select', '7');

    expect(
      $$('.cart-item').length
    ).to.equal(2);

    expect(
      $('.cart-item-0 .cart-item-name').getText()
    ).to.equal('TC 2017 LS');

    expect(
      $('.cart-item-0 .cart-item-qty-select').getValue()
    ).to.equal('4');

    expect(
      $('.cart-item-1 .cart-item-name').getText()
    ).to.equal('TC 2017 Shorts');

    expect(
      $('.cart-item-1 .cart-item-qty-select').getValue()
    ).to.equal('7');

    expect(
      $('.cart-total-value').getText()
    ).to.equal('$314.80');
  });

  it('should empty the cart when pay now is clicked', () => {
    browser.click('.cart-pay-button');

    expect(
      $$('.cart-item').length
    ).to.equal(0);

    expect(
      $('.empty-cart').getText()
    ).to.equal('Cart is empty');
  });

  it('should show updated quantities of items in item page', () => {
    browser
      .click('.back-button')
      .click('.shop-item-0');

    expect(
      $$('.item-qty option').length
    ).to.equal(8);

    browser
      .click('.back-button')
      .click('.shop-item-1');

    expect(
      $$('.item-qty option').length
    ).to.equal(0);

    expect(
      $('.item-sold-out').getText()
    ).to.equal('Sold out!');
  });
});
