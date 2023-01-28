import React from "react";
import styled from "./add.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { createProduct } from "../../service/createProduct";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const productSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required("Required"),
});

function Add() {
  return (
    <div className={styled.add}>
      <img
        src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png"
        alt="add"
      />
      <div className={styled.add__container}>
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: "",
          }}
          validationSchema={productSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            createProduct(values).then((res) => {
              if (res.status === 201) {
                toast.success(res.data.message);
              } else {
                toast.error(res.data.message);
              }
            });
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={styled.add__container__form}>
              <label htmlFor="name">Name</label>
              <Field name="name" />
              <p style={{ color: "red" }}>
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </p>

              <label htmlFor="name">Description</label>
              <Field name="description" />
              <p style={{ color: "red" }}>
                {errors.description && touched.description ? (
                  <div>{errors.description}</div>
                ) : null}
              </p>
              <label htmlFor="name">Price</label>
              <Field name="price" type="number" />
              <p style={{ color: "red" }}>
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
              </p>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <Toaster />
      <Helmet>
        <title>Create Product</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    </div>
  );
}

export default Add;
