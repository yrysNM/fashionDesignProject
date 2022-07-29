class ProductService {
    offset = 210;
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

}

export default ProductService;