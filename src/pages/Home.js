import React from "react";
import Footer from "../components/RootLayout/Footer";
import { useCategories } from "../hooks/useCategories";
import books from "../images/books.jpg";
import { Link } from "react-router-dom";
import CategoriesCard from "../components/UI/CategoriesCard";

const HomePage = () => {
  const categories = useCategories();

  return (
    <>
      <main className="home">
        <section className="home-container">
          <div className="home-container__info">
            <div className="info-header">
              <p>Welcome to Kitaab.</p>
              <h1>One stop solution for your reading needs.</h1>
            </div>
            <button className="shop-btn">
              <Link to="/products">Shop Now</Link>
            </button>
          </div>
          <div className="books-img">
            <img src={books} alt="" />
          </div>
        </section>
        {categories && (
          <section className="categories">
            <h1 className="categories__title">Explore Categories</h1>
            <div className="categories__container">
              {categories.map((item) => {
                return (
                  <Link to="/products" key={item.id}>
                    <CategoriesCard category={item} />
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;