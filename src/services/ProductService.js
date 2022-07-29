class ProductService {
    offset = 3;
    getFilterWomens = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);

        }

        return await res.json();

    }

    getFilterMens = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);

        }

        return await res.json();
    }

    getFilterToddler = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);

        }

        return await res.json();
    }

    getFilterOther = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);

        }

        return await res.json();
    }

    getFilteredProducts = async (offset = this.offset) => {
        const res = await this.getFilterWomens(`http://localhost:5000/productsFilterWomens/${offset}`);

        return res;
    }

    getTShirtProducts = async (offset = this.offset) => {
        const data = await this.getFilteredProducts(offset).then(res => {
            return res.filter(items => items.type === "T-SHIRT");
        });

        return data;
        // return data;
    }

}

export default ProductService;