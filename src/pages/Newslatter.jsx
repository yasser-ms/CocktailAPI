import axios from "axios";
import React from "react";
import { Form, redirect } from "react-router-dom";
const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    return redirect("/");
  } catch (error) {
    return <h2>{error?.response?.data?.msg}</h2>;
  }
};

function Newslatter() {
  return (
    <Form method="post" className="form">
      <h4 style={{ textAlign: "center" }}>NewsLetter</h4>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
          className="form-input"
          type="text"
          name="name"
          id="name"
          defaultValue="john"
        />
      </div>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          Last Name
        </label>
        <input
          className="form-input"
          type="text"
          name="Lastname"
          id="Lastname"
          defaultValue="dep"
        />
      </div>
      <div className="form-row">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          defaultValue="johndep@gmail.com"
        />
      </div>
      <div className="form-row">
        <input type="submit" value="submit" className="btn btn-block" />
      </div>
    </Form>
  );
}

export default Newslatter;
