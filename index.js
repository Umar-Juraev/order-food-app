function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

const URL = `https://gist.githubusercontent.com/Umar-Juraev/e860b9a4dff187447f37dcb3be084266/raw/cb6451abaa06470e0ffa6994995865506155117b/national-dishes-of-uzbekistan.json`
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
