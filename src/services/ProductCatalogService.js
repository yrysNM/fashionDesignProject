import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import axios from "axios";

const useProductService = () => {
    const { loading, request, error, clearError } = useHttp();
    const [loadingAxios, setLoadingAxios] = useState(false);
    const [errorAxios, setErrorAxios] = useState(0);

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


    //Catalog service
    /**
     * 
     * @param {url image} imageURL 
     * @param {some object id} objectID 
     * @param { random 1 0 for is the threshold for how certain the platform must be about an object to include it in the classifications.} scoreLimit 
     * @returns tagging info image
    */
    const getRecognize = async (imageURL, objectID, scoreLimit) => {

        let obj = {
            products: [],
        }
        setLoadingAxios(true);

        await axios.post("https://fast-hamlet-56846.herokuapp.com/recognize", {
            "imageURL": imageURL,
            "objectID": objectID,
            "scoreLimit": scoreLimit
        })
            .then(res => obj.products.push(res.data))
            .catch((e) => {
                setLoadingAxios(false);
                setErrorAxios(e.message);
                throw e;
            });

        setLoadingAxios(false);
        return obj.products;
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
        loadingAxios,
        errorAxios,
        clearError,
        getFilteredProducts,
        getdiscountProducts,
        getItemProductsCatalog,
        getProduct,
        getRecognize
    };
}


export default useProductService;