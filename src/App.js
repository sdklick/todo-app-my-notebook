import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [name, setName] = useState("");
  const [data, setdata] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      toast.error(`Please Add Something`, { position: "bottom-left" });
    } else {
      setdata([...data, name]);
      toast.success(`${name} Add Successfully`, { position: "bottom-right" });
    }
  };

  return (
    <>
      <div className="card text-center">
        <div className="card-header">My Notebook</div>
        <div className="card-body">
          <div className="container">
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                <div className="search">
                  <i className="fa fa-search"></i>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="form-control"
                      name="uinput"
                      placeholder="Write Everything"
                      onChange={(v) => {
                        setName(v.target.value);
                      }}
                    />
                    <button type="submit" className="btn btn-primary">
                      +
                    </button>
                  </form>
                  {data.map((val, index) => {
                    return (
                      <>
                        <div key={index} className="card bg-success text-white mt-5">
                          <div  className="card-body">{val}</div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
