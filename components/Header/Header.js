class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                
                    <img src="./backet.png" alt="basket"  width="25"  /> ${count > 0 ? `<span class="header-count">${count}</span>` : ''}
                </div>
            </div>
        `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
