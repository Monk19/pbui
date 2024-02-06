"use client";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Lock, Mail, Phone, User } from "react-feather";
import "../../../public/assets/main.scss";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
// import Img from "../Common/Image";
import formatName from "../../../public/utils/formatName.js";

const SignUpPage = ({ user }) => {
  const router = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [showpassword, setShowpassword] = useState(false);
  const [disable, setDisable] = useState(false);
  const [confirmShowpassword, setconfirmShowpassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBuilderInput, setShowBuilderInput] = useState(false);
  const [showChannelInput, setShowChannelInput] = useState(false);
  const [builderButton, setBuilderButton] = useState(false);
  const [channelButton, setChannelButton] = useState(false);
  const [selectedRole, setSelectedRole] = useState({
    name: "Photographer",
    value: 1,
  });
  const [company, setCompany] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({
    name: "Basic",
    value: 1,
  });
  const [packageDropDown, setPackageDropDown] = useState(false);
  const handlePartnerBuilderClick = () => {
    setSelectedRole({ name: "Partner Builder", value: 5 });
    setBuilderButton(true);
    setChannelButton(false);
    setShowBuilderInput(!showBuilderInput);
    setShowChannelInput(false);
  };

  const handleChannelPartnerClick = () => {
    setSelectedRole({ name: "Channel Partner", value: 7 });
    setChannelButton(true);
    setBuilderButton(false);
    setShowBuilderInput(false);
    setShowChannelInput(!showChannelInput);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="authentication-box">
      <Container fluid={true} className="container-fluid">
        <Row className="log-in">
          <Col
            xxl="5"
            xl="6"
            lg="7"
            md="8"
            sm="9"
            xs="12"
            className="form-login"
          >
            <Card className="card">
              <CardHeader style={{ display: "flex", justifyContent: "center" }}>
                {/* <Img
                  src={`/assets/images/logo3.png`}
                  alt=""
                  style={{ width: 128 }}
                /> */}
                <h2>Aakashaa</h2>
              </CardHeader>

              <CardBody className="card-body">
                <div className="title-3 text-start">
                  <h2>
                    {" "}
                    {user === "partner" ? "Channel Partner Sign Up" : "Sign Up"}
                  </h2>
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    number: "",
                    password: "",
                    confirmpassword: "",
                    firstname: "",
                    lastname: "",
                    agreeToTerms: false,
                    whatsappNotification: false,
                  }}
                  validationSchema={Yup.object().shape({
                    firstname: Yup.string().required(
                      "Please enter your first name..!"
                    ),
                    lastname: Yup.string().required(
                      "Please enter your last name..!"
                    ),
                    email: Yup.string()
                      .required("Please enter valid Email..!")
                      .email("Enter a valid email address"),
                    number: Yup.string()
                      .required("Please enter valid Mobile Number..!")
                      .matches(
                        /^\d{10}$/,
                        "Enter a valid 10-digit phone number"
                      ),
                    password: Yup.string().required(
                      "Please enter the Password..!"
                    ),
                    confirmpassword: Yup.string().required(
                      "Confirm Password is required..!"
                    ),
                    agreeToTerms: Yup.boolean().oneOf(
                      [true],
                      "You must agree to the Terms and Conditions"
                    ),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    const trimmedValues = {
                      ...values,
                      firstname: formatName(values.firstname),
                      lastname: formatName(values.lastname),
                    };
                    console.log("values", values);
                    console.log("trimmedValues", trimmedValues);
                    console.log("-->", values);

                    if (!trimmedValues.firstname || !trimmedValues.lastname) {
                      toast.error(
                        "First Name and Last Name fields are Mandatory"
                      );
                      setSubmitting(false);
                      return;
                    }
                    if (
                      trimmedValues.email &&
                      trimmedValues.password &&
                      trimmedValues.number &&
                      trimmedValues.firstname &&
                      trimmedValues.lastname
                    ) {
                      setDisable(true);
                      if (
                        trimmedValues.password ===
                          trimmedValues.confirmpassword &&
                        values.agreeToTerms
                      ) {
                        localStorage.setItem(
                          "emailForVerification",
                          trimmedValues.email
                        );

                        const apiEndpoint =
                          user === "partner"
                            ? `${BASE_URL}/auth/partner-builder-sign-up`
                            : `http://localhost:3402/register`;

                        const payload = {
                          email: trimmedValues.email,
                          password: trimmedValues.password,
                          user_type_id: selectedRole.value,
                          mobile: trimmedValues.number,
                          first_name: trimmedValues.firstname,
                          last_name: trimmedValues.lastname,
                          whatsappNotification: values["whatsappNotification"],
                          package: selectedPackage.name,
                        };
                        // console.log()

                        if (user === "partner") {
                          payload.company = company;
                        }

                        axios
                          .post(apiEndpoint, payload)
                          .then((response) => {
                            setDisable(false);
                            console.log(response.data);
                            toast.success(response.data.message);
                            console.log("Status code", response.status);
                            // router.push(
                            //   "/authentication/twoFactorVerification"
                            // );
                            router.push("/login");
                          })
                          .catch((error) => {
                            setDisable(false);
                            console.log(error.response.status);
                            toast.error(error.response.data.message);
                          });
                      } else {
                        setDisable(false);
                        toast.error(
                          "Password and confirm password don't match..!"
                        );
                      }
                    }

                    setSubmitting(false);
                  }}
                >
                  {({
                    errors,
                    touched,
                    isValid,
                    dirty,
                    values,
                    setFieldValue,
                  }) => (
                    <Form>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <User size={20} />
                          </div>
                          <Field
                            type="firstname"
                            className={`form-control ${
                              errors.firstname && touched.firstname
                                ? "is-invalid"
                                : ""
                            }`}
                            name="firstname"
                            placeholder="Enter First Name"
                          />
                        </div>
                        {errors.firstname && touched.firstname && (
                          <div
                            className="text-danger ms-4"
                            style={{ fontSize: "small" }}
                          >
                            {errors.firstname}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <User size={20} />
                          </div>
                          <Field
                            type="lastname"
                            className={`form-control ${
                              errors.lastname && touched.lastname
                                ? "is-invalid"
                                : ""
                            }`}
                            name="lastname"
                            placeholder="Enter Last Name"
                          />
                        </div>
                        {errors.lastname && touched.lastname && (
                          <div
                            className="text-danger ms-4"
                            style={{ fontSize: "small" }}
                          >
                            {errors.lastname}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <Mail size={20} />
                          </div>
                          <Field
                            type="email"
                            className={`form-control ${
                              errors.email && touched.email ? "is-invalid" : ""
                            }`}
                            name="email"
                            placeholder="Enter email"
                          />
                        </div>
                        {errors.email && touched.email && (
                          <div
                            className="text-danger ms-4"
                            style={{ fontSize: "small" }}
                          >
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <Phone size={20} />
                          </div>
                          <Field
                            type="tel"
                            className={`form-control ${
                              errors.number && touched.number
                                ? "is-invalid"
                                : ""
                            }`}
                            name="number"
                            placeholder="Enter Mobile Number"
                          />
                        </div>
                        {errors.number && touched.number && (
                          <div
                            className="text-danger ms-4"
                            style={{ fontSize: "small" }}
                          >
                            {errors.number}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <Lock size={20} />
                          </div>
                          <Field
                            type={`${showpassword ? "text" : "password"}`}
                            name="password"
                            id="pwd-input"
                            className={`form-control ${
                              errors.password && touched.password
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Password"
                          />
                          <div className="input-group-apend">
                            <i
                              id="pwd-icon"
                              className={`far fa-eye${
                                !showpassword ? "-slash" : ""
                              }`}
                              onClick={() => {
                                setShowpassword(!showpassword);
                              }}
                            />
                          </div>
                        </div>
                        {errors.password && touched.password && (
                          <div
                            className="text-danger ms-4"
                            style={{ fontSize: "small" }}
                          >
                            {errors.password}
                          </div>
                        )}
                        <div className="important-note">
                          {/* password should be a minimum of 8 characters and should contains letters and numbers */}
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <Lock size={20} />
                          </div>
                          <Field
                            type={`${
                              confirmShowpassword ? "text" : "password"
                            }`}
                            name="confirmpassword"
                            id="pwd-input"
                            className={`form-control ${
                              errors.password && touched.password
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Confirm Password"
                            onChange={(e) => {
                              setFieldValue("confirmpassword", e.target.value);
                              if (values.password !== e.target.value) {
                                setFieldValue(
                                  "confirmpassword",
                                  e.target.value,
                                  false
                                );
                              }
                            }}
                          />
                          <div className="input-group-apend">
                            <i
                              id="pwd-icon"
                              className={`far fa-eye${
                                !confirmShowpassword ? "-slash" : ""
                              }`}
                              onClick={() => {
                                setconfirmShowpassword(!confirmShowpassword);
                              }}
                            />
                          </div>
                        </div>
                        {errors.password && touched.password && (
                          <div
                            className="text-danger ms-4"
                            style={{ fontSize: "small" }}
                          >
                            {errors.password}
                          </div>
                        )}
                        {values.password !== values.confirmpassword && (
                          <div
                            className="text-danger ms-4"
                            style={{ fontSize: "small" }}
                          >
                            Password doesn't match
                          </div>
                        )}
                        <div className="important-note">
                          {/* password should be a minimum of 8 characters and should contains letters and numbers */}
                        </div>
                      </div>
                      <div
                        className="form-group"
                        style={{ marginBottom: "20px" }}
                      >
                        {user === "partner" ? (
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                              }}
                            >
                              <div
                                style={{ margin: "1rem", maxWidth: "200px" }}
                              >
                                <button
                                  type="button"
                                  className={`btn ${
                                    builderButton
                                      ? "btn-gradient"
                                      : "btn-dashed"
                                  }`}
                                  onClick={handlePartnerBuilderClick}
                                >
                                  Partner Builder
                                </button>
                                {showBuilderInput && (
                                  <input
                                    type="text"
                                    placeholder="Company Name"
                                    style={{
                                      boxSizing: "border-box",
                                      border: "none",
                                      borderBottom: "2px solid gray",
                                      marginTop: "10px",
                                    }}
                                    onChange={(e) => setCompany(e.target.value)}
                                  />
                                )}
                              </div>
                              <div
                                style={{ margin: "1rem", maxWidth: "200px" }}
                              >
                                <button
                                  type="button"
                                  className={`btn ${
                                    channelButton
                                      ? "btn-gradient"
                                      : "btn-dashed"
                                  }`}
                                  onClick={handleChannelPartnerClick}
                                >
                                  Channel Partner
                                </button>
                                {showChannelInput && (
                                  <input
                                    type="text"
                                    placeholder="Reference Code"
                                    style={{
                                      boxSizing: "border-box",
                                      border: "none",
                                      borderBottom: "2px solid gray",
                                      marginTop: "10px",
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div className="d-flex">
                        <ButtonDropdown
                          isOpen={dropdownOpen}
                          toggle={() => setDropdownOpen(!dropdownOpen)}
                          className="ms-3 custom-dropdown"
                        >
                          <DropdownToggle
                            caret
                            className="custom-dropdown-toggle"
                          >
                            {selectedRole?.name}
                          </DropdownToggle>
                          <DropdownMenu className="custom-dropdown-menu">
                            <DropdownItem
                              onClick={() =>
                                setSelectedRole({
                                  name: "Photographer",
                                  value: 1,
                                })
                              }
                            >
                              Photographer
                            </DropdownItem>

                            <DropdownItem
                              onClick={() =>
                                setSelectedRole({ name: "Customer", value: 2 })
                              }
                            >
                              Customer
                            </DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                        <ButtonDropdown
                          isOpen={packageDropDown}
                          toggle={() => setPackageDropDown(!packageDropDown)}
                          className="ms-3 custom-dropdown"
                        >
                          <DropdownToggle
                            caret
                            className="custom-dropdown-toggle"
                          >
                            {selectedPackage?.name}
                          </DropdownToggle>
                          <DropdownMenu className="custom-dropdown-menu">
                            <DropdownItem
                              onClick={() =>
                                setSelectedPackage({
                                  name: "Basic",
                                  value: 10,
                                })
                              }
                            >
                              Basic 10TB
                            </DropdownItem>

                            <DropdownItem
                              onClick={() =>
                                setSelectedPackage({
                                  name: "premium",
                                  value: 20,
                                })
                              }
                            >
                              premium 40TB
                            </DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="opt-whatsapp"
                            name="whatsappNotification"
                            checked={values.whatsappNotification}
                            onChange={() => {
                              setFieldValue(
                                "whatsappNotification",
                                !values.whatsappNotification
                              );
                              // handleCheckboxClick(); // Open the modal when the checkbox is
                            }}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="opt-whatsapp"
                            style={{ marginLeft: "0.5rem" }}
                          >
                            Opt for whatsapp notifications
                            <a href="#" onClick={toggleModal}></a>
                          </label>
                        </div>
                        {errors.agreeToTerms && touched.agreeToTerms && (
                          <div
                            className="text-danger ms-4"
                            style={{ fontSize: "small" }}
                          >
                            {errors.agreeToTerms}
                          </div>
                        )}
                      </div>

                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="agreeToTermsCheckbox"
                            name="agreeToTerms"
                            checked={values.agreeToTerms}
                            onChange={() => {
                              setFieldValue(
                                "agreeToTerms",
                                !values.agreeToTerms
                              );
                              // handleCheckboxClick(); // Open the modal when the checkbox is
                            }}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="agreeToTermsCheckbox"
                            style={{ marginLeft: "0.5rem" }}
                          >
                            I agree to{" "}
                            <a href="#" onClick={toggleModal}>
                              Terms and Conditions.
                            </a>
                          </label>
                        </div>
                        {errors.agreeToTerms && touched.agreeToTerms && (
                          <div
                            className="text-danger ms-4"
                            style={{ fontSize: "small" }}
                          >
                            {errors.agreeToTerms}
                          </div>
                        )}
                      </div>

                      <Modal isOpen={isModalOpen} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>
                          Terms and Conditions
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            I agree to Bhuvi Realtech's Terms and Conditions
                          </p>
                        </ModalBody>
                        <ModalFooter style={{ padding: "10px" }}>
                          <button
                            color="secondary"
                            className="btn btn-dashed btn-pill"
                            onClick={toggleModal}
                          >
                            Close
                          </button>
                        </ModalFooter>
                      </Modal>

                      <div>
                        <button
                          type="submit"
                          className="btn btn-gradient btn-pill me-sm-3 me-2"
                          disabled={
                            disable ||
                            values.password !== values.confirmpassword
                          }
                        >
                          Create Account
                        </button>
                        <Link
                          href="/authentication/login"
                          className="btn btn-dashed btn-pill"
                        >
                          Log In
                        </Link>
                        <div className="v-sign"></div>
                      </div>
                    </Form>
                  )}
                </Formik>
                {/* <div className="divider">
                                    <h6>or</h6>
                                </div> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpPage;
