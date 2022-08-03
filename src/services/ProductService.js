import { useHttp } from "../hooks/http.hook";


const useProductService = () => {
    const { loading, request, error, clearError } = useHttp();
    const _baseOffset = 3;

    const getFilteredProducts = async (offset = _baseOffset) => {
        const res = await request(`http://localhost:5000/productsFilterWomens/${offset}`);

        return res.map(_transformPoducts);
    }

    const getProduct = async (productId) => {

        const res = await request(`https://fast-hamlet-56846.herokuapp.com/product/${productId}`);

        return _transformPoducts(res);
    }

    const getdiscountProducts = async () => {
        let obj = {
            products: []
        }
        const tShitProduct = await request("https://fast-hamlet-56846.herokuapp.com/productsTShirt");

        const embroProduct = await request("https://fast-hamlet-56846.herokuapp.com/productsEmbro")

        const shoesProdcut = await request("https://fast-hamlet-56846.herokuapp.com/productsShoes")

        const mugProduct = await request("https://fast-hamlet-56846.herokuapp.com/productsMug")

        obj.products.push(...tShitProduct, ...embroProduct, ...shoesProdcut, ...mugProduct);


        return obj.products.map(_transformPoducts);
    }


    const getItemProductsCatalog = async (offset = _baseOffset) => {

        let obj = {
            products: [],


        }

        await request(`http://localhost:5000/productsOffsetTShirt/${offset + 3}`)
            .then(res => {
                // console.log(res);
                res.forEach(async (productId) => {
                    await request("http://localhost:5000/product/" + productId._id).then(async result => {

                        if (result) {
                            await obj.products.push(result)

                        }
                    });

                })
            });


        await request("http://localhost:5000/productsOffsetEmbro/" + offset + 2)
            .then(res => {
                res.forEach(async (productId) => {
                    await request("http://localhost:5000/product/" + productId._id).then(async result => {
                        if (result) {
                            await obj.products.push(result);
                        }
                    })
                })
            });


        await request("http://localhost:5000/productsOffsetShoes/" + offset + 2)
            .then(res => {
                res.forEach(async (productId) => {
                    await request("http://localhost:5000/product/" + productId._id).then(async result => {
                        if (result) {
                            await obj.products.push(result);
                        }
                    })
                })
            });

        await request("http://localhost:5000/productsOffsetMug/" + offset + 2)
            .then(res => {
                res.forEach(async (productId) => {
                    await request("http://localhost:5000/product/" + productId._id).then(async result => {
                        if (result) {
                            await obj.products.push(result);
                        }
                    })
                })
            });

        return obj.products.map(_transformPoducts);
    }

    const _transformPoducts = (product) => {
        return {
            id: product.id,
            title: product.title,
            type: product.type,
            image: product.image,
            description: product.description,
            price: product.variant_count,
            type_name: product.type_name,
        }
    };

    return {
        loading,
        error,
        clearError,
        getFilteredProducts,
        getdiscountProducts,
        getItemProductsCatalog,
        getProduct
    };
}


export default useProductService;