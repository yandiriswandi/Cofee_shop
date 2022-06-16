import React, { useState, useEffect } from "react";
// import Navbar from "../components/navbar/Navbar";
import ic from "../../images/ic_attach.png";
import add from "../../images/addBtn.png";
// import { API } from "../config/api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import checked from "../../images/checked.svg";
import { Button, Modal } from "react-bootstrap";

export default function AddProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // let navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [previews, setPreviews] = useState(null);
  // const [form, setForm] = useState({
  //   title: "",
  //   year: "",
  //   author: "",
  //   pages: "",
  //   ISBN: "",
  //   price: "",
  //   desc: "",
  //   bookPdf: "",
  //   bookImg: "",
  // });

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]:
  //       e.target.type === "file" ? e.target.files : e.target.value,
  //   });

  //   // Create image url for preview
  //   if (e.target.type === "file") {
  //     let url = URL.createObjectURL(e.target.files[0]);
  //     setPreview(url);
  //   }
  // };

  // const handleChanges = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]:
  //       e.target.type === "file" ? e.target.files : e.target.value,
  //   });
  //   if (e.target.type === "file") {
  //     let url = URL.createObjectURL(e.target.files[0]);
  //     setPreviews(url);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();

  //     // Store data with FormData as object
  //     const formData = new FormData();
  //     formData.set("bookPdf", form.bookPdf[0], form.bookPdf[0].name);
  //     formData.set("bookImg", form.bookImg[0], form.bookImg[0].name);
  //     formData.set("title", form.title);
  //     formData.set("year", form.year);
  //     formData.set("author", form.author);
  //     formData.set("pages", form.pages);
  //     formData.set("ISBN", form.ISBN);
  //     formData.set("price", form.price);
  //     formData.set("desc", form.desc);

  //     // Configuration
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };

  //     // Insert product data
  //     await API.post("/book", formData, config);
  //     handleShow();
  //     setForm({
  //       title: "",
  //       year: "",
  //       author: "",
  //       pages: "",
  //       ISBN: "",
  //       price: "",
  //       desc: "",
  //       bookImg: "",
  //       bookPdf: "",
  //     });
  //     setPreview(null);
  //     setPreviews(null);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   setForm();
  // }, [show]);

  return (
    <div className="bg-homes">
      {/* <Navbar /> */}
      {/* <form onSubmit={handleSubmit}> */}
      <form >
        <div className="container form-Addproduct">
          <h3 className="mb-4">Add Product</h3>
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-3 "
            name="name"
            // value={form?.title}
            // onChange={handleChange}
          />
          <input
            type="Stock"
            placeholder="Stock"
            className="form-control mb-3 "
            name="author"
            // value={form?.author}
            // onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Price"
            className="form-control mb-3"
            name="pages"
            // value={form?.pages}
            // onChange={handleChange}
          />
          <textarea
            name="Description Product"
            // value={form?.desc}
            // onChange={handleChange}
            id=""
            className="w-100 px-2 py-2 rounded "
            placeholder="About This Book"
          ></textarea>
          <div className="form-group mt-3">
        
            <div className="d-flex align-items-center">
           
              {previews !== null ? (
                <div className="ms-4">
                  <img
                    src={checked}
                    alt=""
                    style={{
                      height: "30px",
                      width: "30px",
                    }}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="form-group mt-3  ">
            <input
              type="file"
              id="actual-btn2"
              className="inputFile"
              name="bookImg"
              // onChange={handleChange}
              hidden
            />
            <label htmlFor="actual-btn2" className="btn border border-dark">
              Attache Book File
              <img className="float-right ml-2" src={ic} alt="" />
            </label>
            {preview !== null ? (
              <div
                className=""
                style={{
                  height: "50px",
                  width: "50px",
                  marginTop: "-45px",
                  marginLeft: "200px",
                }}
              >
                <img src={preview} alt="" className="h-100 w-100" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="text-end pb-5">
            <button className="mt-3 btn btn-secondary  " type="submit">
              Add Book
              <img className="ms-2 " src={add} alt="" />
            </button>
          </div>
        </div>
      </form>
      <Modal show={show} onHide={handleClose}>
        <div className="text-center">
          <p className="fs-2 fw-bold text-success p-5">Add Book Success</p>
        </div>
      </Modal>
    </div>
  );
}
