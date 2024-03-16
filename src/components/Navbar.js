import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    {/* ======= Header ======= */}
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1>ZenBlog</h1>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/sinle-post">Single Post</Link>
            </li>
            <li className="dropdown">
              <a href="category.html">
                <span>Categories</span>{" "}
                <i className="bi bi-chevron-down dropdown-indicator" />
              </a>
              <ul>
                <li>
                  <Link to="/search">Search Result</Link>
                </li>
                <li>
                  <Link href="#">Drop Down 1</Link>
                </li>
                <li>
                  <Link href="#">Drop Down 2</Link>
                </li>
                <li>
                  <Link href="#">Drop Down 3</Link>
                </li>
                <li>
                  <Link href="#">Drop Down 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* .navbar */}
        <div className="position-relative">
          <Link href="#" className="mx-2">
            <span className="bi-facebook" />
          </Link>
          <Link href="#" className="mx-2">
            <span className="bi-twitter" />
          </Link>
          <Link href="#" className="mx-2">
            <span className="bi-instagram" />
          </Link>
          <Link href="#" className="mx-2 js-search-open">
            <span className="bi-search" />
          </Link>
          <i className="bi bi-list mobile-nav-toggle" />
          {/* ======= Search Form ======= */}
          <div className="search-form-wrap js-search-form-wrap">
            <form action="search-result.html" className="search-form">
              <span className="icon bi-search" />
              <input type="text" placeholder="Search" className="form-control" />
              <button className="btn js-search-close">
                <span className="bi-x" />
              </button>
            </form>
          </div>
          {/* End Search Form */}
        </div>
      </div>
    </header>
    {/* End Header */}
  </>
  );
}
