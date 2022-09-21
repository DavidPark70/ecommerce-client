import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    category
                        ? `http://localhost:5000/api/products?category=${category}`
                        : 'http://localhost:5000/api/products'
                );
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [category]);

    useEffect(() => {
        category &&
            setFilterProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, category, filters]);

    useEffect(() => {
        if (sort === 'newest') {
            setFilterProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === 'asc') {
            setFilterProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilterProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Container>
            {
                category
                    ? filteredProducts.map((item) => (
                        <Product item={item} key={item.id} />
                    ))
                    : products
                        .slice(0, 8)
                        .map((item) => <Product item={item} key={item.id} />)
            }
        </Container>
    )
}

export default Products