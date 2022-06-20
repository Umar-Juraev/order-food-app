class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = '';
    }


    handleDelete(element, id) {
        const { pushProducts, products } = localStorageUtil.putProducts(id)
        this.render();
        headerPage.render(products.length)
        productsPage.render()
    }


    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                    <td class="shopping-element__price">${price.toLocaleString()} so'm</td>
                    <td  class="shopping-element__btn" onclick="shoppingPage.handleDelete(this,'${id}')" >remove</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💥 Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} so'm</td>
                    </tr>
                </table>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
};

const shoppingPage = new Shopping();
