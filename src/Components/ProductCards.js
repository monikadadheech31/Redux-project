import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../features/CartSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";


const ProductCard = () => {
const dispatch = useDispatch()

  const item = useSelector((state) => state.allcard.items);
  // console.log(data);
const [inputtext,setInputtext] = useState("");
const inputhandler = (e) =>{
  setInputtext(e.target.value.toLowerCase());
};

  return (
    <div>
      <MDBContainer>
        <input id="search" type="search" className="form-control rounded mt-2"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon" onChange={inputhandler}
        value={inputtext}//use 'value' instead of 'val'
         />
        <MDBRow>
          {item
          // .filter((el) => el.title.toLowerCase().includes(inputtext))
          .map((data,key) => (
            <MDBCol key={data.id} size="md-4 mt-2">
              <MDBCard>
                <MDBCardImage
                  src={`${data.img}`} style={{height : '20rem'}}
                  position="top"
                  alt="img"
                />
                <MDBCardBody>
                  <MDBCardTitle>{data.brand}</MDBCardTitle>
                  <MDBCardText>
                   Model : {data.model} , Price : {data.price}
                  </MDBCardText>
                  <MDBBtn  onClick={()=>{dispatch(addtocart(data))}}>Add to Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProductCard;
