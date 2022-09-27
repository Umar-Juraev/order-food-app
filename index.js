function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

const URL = `https://gist.githubusercontent.com/Umar-Juraev/b0a775691f3ac418d04aea5cb4033ba6/raw/2f4371c6778a355d8900d5f25216c9ae49eaed33/milliy-taomlar.json`
fetch(URL)
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;

    setTimeout(() => {
      spinnerPage.handleClear();
      render();
    }, 1000);
  })
  .catch(() => {
    spinnerPage.handleClear();
    errorPage.render();
  });