class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    <img width="25"  src="../../img/wishlist.png" /> ${count > 0 ? `<span class="header-count">${count}</span>`  : ''}
                </div>
            </div>
        `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
