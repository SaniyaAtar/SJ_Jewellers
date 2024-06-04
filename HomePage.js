import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Checkbox, Radio, Dropdown, Menu, Button } from "antd";
import { weight } from "../components/weight";
import ReactImg from '../images/img1.jpg';
import VueImg from '../images/img2.jpg';
import AngularImg from '../images/back1.jpeg';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getTotal();
  }, []);

  // Get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // Load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProducts();
  }, [checked, radio]);

  // Filter products
  const filterProducts = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="weight">
        <h4>Filter By Weight:</h4>
        <Radio.Group onChange={(e) => setRadio(e.target.value)}>
          {weight.map((p) => (
            <div key={p._id}>
              <Radio value={p.array}>{p.name}</Radio>
            </div>
          ))}
        </Radio.Group>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout title={"All Products - Best Offers"}>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
                  <Button className="me-3">Filter By</Button>
                </Dropdown>
              </div>
              <div className="d-flex flex-wrap">
                {categories.map((category) => (
                  <Checkbox
                    key={category._id}
                    onChange={(e) => handleFilter(e.target.checked, category._id)}
                    className="me-3"
                  >
                    {category.name}
                  </Checkbox>
                ))}
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => window.location.reload()}
                >
                  Reset Filters
                </button>
              </div>
            </div>
            <div>
              <Carousel showArrows autoPlay infiniteLoop>
                <div>
                  <img src={ReactImg} alt="slide 1" style={{ maxWidth: "100%", maxHeight: "500px" }} />
                </div>
                <div>
                  <img src={VueImg} alt="slide 2" style={{ maxWidth: "100%", maxHeight: "500px" }} />
                </div>
                <div>
                  <img src={AngularImg} alt="slide 3" style={{ maxWidth: "100%", maxHeight: "500px" }} />
                </div>
              </Carousel>
            </div>
            <div className="d-flex flex-wrap">
              {products.map((product) => (
                <div className="card m-2" style={{ width: "14rem", backgroundColor: "#f0f0f0" }} key={product._id}>
                  <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                    style={{ maxWidth: "100%", maxHeight: "180px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      {product.description.substring(0, 30)}...
                    </p>
                    <p className="card-text">$ {product.weight}</p>
                    <button className="btn btn-primary ms-1">More Details</button>
                    <button className="btn btn-secondary ms-1">Add to Cart</button>
                  </div>
                </div>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
