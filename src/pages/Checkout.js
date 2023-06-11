import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Checkout() {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">MaxShop</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item total-price">
                      <Link className="text-dark" to="/cart">
                        Cart
                      </Link>
                    </li>
                    &nbsp;/
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Information
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item total-price">
                      <Link to="/" className="text-dark">
                        Shipping
                      </Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Ibrahim Buhari (Ibrabuhari01@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Selected Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment, Suite, etc"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Selected State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <AiOutlineArrowLeft className="me-1" /> Return to Cart
                      </Link>
                      <Link to="/shipping" className="button">
                        Continue Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "2px", right: "2px" }}
                        className="badge bg-secondary text-white  position-absolute"
                      >
                        1
                      </span>
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div>
                      <h5 className="total-price">nnhhrghwfbrgy</h5>
                      <p className="total-price">cj.,mnzdjjhsdjjk</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="total">Subtotal</p>
                  <p className="total-price">$1000.00</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$1000.00</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$1000.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
