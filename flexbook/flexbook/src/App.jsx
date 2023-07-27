import { useState} from 'react';
import './App.css';

function Flexbook() {
  const [showGenderSelect, setShowGenderSelect] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: ''
  });

  const handleGenderChange = (event) => {
    const gender = event.target.value;
    setShowGenderSelect(gender === 'custom');
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the API
      const response = await fetch('/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Registration was successful
        console.log('Registration successful!');
      } else {
        // Registration failed
        console.error('Registration failed!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray">
      {/* Login */}
      <div className="container mt-5 pt-5 d-flex flex-column flex-lg-row justify-content-evenly">
        {/* heading */}
        <div className="text-center text-lg-start mt-0 pt-0 mt-lg-5 pt-lg-5">
          <h1 className="text-primary fw-bold fs-0">flexbook</h1>
          <p className="w-75 mx-auto fs-4 mx-lg-0">
            Flexbook helps you connect and share with the people in your life.
          </p>
        </div>
        {/* form card */}
        <div style={{ maxWidth: '28rem', width: '100%' }}>
          {/* login form */}
          <div className="bg-white shadow rounded p-3 input-group-lg">
            <input
              type="email"
              className="form-control my-3"
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              className="form-control my-3"
              placeholder="Password"
            />
            <a href="./feed.html">
              <button className="btn btn-primary w-100 my-3">Log In</button>
            </a>
            <a href="#" className="text-decoration-none text-center">
              <p>Forgotten password?</p>
            </a>
            {/* create form */}
            <hr />
            <div className="text-center my-4">
              <button
                className="btn btn-success btn-lg"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#createModal"
              >
                Create New Account
              </button>
            </div>
            {/* create modal */}
            <div
              className="modal fade"
              id="createModal"
              tabIndex="-1"
              aria-labelledby="createModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* head */}
                  <div className="modal-header">
                    <div>
                      <h2 className="modal-title" id="exampleModalLabel">
                        Sign Up
                      </h2>
                      <span className="text-muted fs-7">
                        It is quick and easy.
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* body */}
                  <div className="modal-body">
                    <form onSubmit={handleFormSubmit}>
                      {/* names */}
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={(event) =>
                              setFormData((prevFormData) => ({
                                ...prevFormData,
                                firstName: event.target.value
                              }))
                            }
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Surname"
                            value={formData.lastName}
                            onChange={(event) =>
                              setFormData((prevFormData) => ({
                                ...prevFormData,
                                lastName: event.target.value
                              }))
                            }
                          />
                        </div>
                      </div>
                      {/* email & pass */}
                      <input
                        type="email"
                        className="form-control my-3"
                        placeholder="Mobile number or email address"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            email: event.target.value
                          }))
                        }
                      />
                      <input
                        type="password"
                        className="form-control my-3"
                        placeholder="New password"
                        value={formData.password}
                        onChange={(event) =>
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            password: event.target.value
                          }))
                        }
                      />
                      {/* gender */}
                      <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="gender">
                          Gender:
                        </label>
                        <select
                          className="form-select"
                          id="gender"
                          value={formData.gender}
                          onChange={handleGenderChange}
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                      {showGenderSelect && (
                        <input
                          type="text"
                          className="form-control my-3"
                          placeholder="Gender (Custom)"
                        />
                      )}
                      {/* submit */}
                      <button
                        type="submit"
                        className="btn btn-success w-100 my-3"
                      >
                        Sign Up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flexbook;