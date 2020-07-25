import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        msg: "",
    })

    const InputEvent = (event) => {
        const{name , value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        alert(`My name is ${data.fullName}. My phone number is ${data.phone}. My email is ${data.email}. My text is ${data.msg}`);

        setData(
            {
                fullName: "",
                phone: "",
                email: "",
                msg: "",
            }
        );
    }

    return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
