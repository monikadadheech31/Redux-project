import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, getCartTotal, increaseQuantity, removeFromCart } from '../features/CartSlice'

const Cartpage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector((state) => (state.allcard))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartTotal())

  }, [dispatch,cart])
  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart -{cart.length}</h5>
                </div>
                <div className="card-body">
                  {cart.map((data) => (
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                          <img src={data.img} className="w-100" alt="Blue Jeans Jacket" />
                          <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                          </a>
                        </div>

                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        {/* <p><strong>{data.brand || "No Brand"}</strong></p> */}
                       <p>{data.brand}</p>  <p><strong>{data.model}</strong></p>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init onClick={() => dispatch(removeFromCart(data.id))} title="Remove item">
                          <i className="fas fa-trash" />
                        </button>
                        {/* <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init title="Move to the wish list">
                 <i className="fas fa-heart" />
               </button> */}

                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

                        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2" onClick={() => dispatch(decreaseQuantity(data.id))}>
                            <i className="fas fa-minus" />
                          </button>
                          <span className="fw-bold text-center" style={{ minWidth: 50 }}>{data.quantity}</span>

                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2" onClick={() => dispatch(increaseQuantity(data.id))}>
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>Price : {data.price * data.quantity}</strong>
                        </p>

                      </div>
                    </div>
                  ))}


                  <hr className="my-4" />
                  {/*........................................*/}


                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity
                      }</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>

                      </div>
                      <span><strong>₹{totalPrice.toLocaleString()}</strong></span>
                    </li>
                  </ul>
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cartpage