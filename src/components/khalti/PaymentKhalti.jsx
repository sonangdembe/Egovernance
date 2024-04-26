import React, { useState } from "react";
import CancelPayment from "./CancelPayment";
import { Link } from "react-router-dom";


const PaymentKhalti = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
    console.log("Form submitted:", { phoneNumber, password });
  };

  return (
    <div style={styles.container}>
      <p
        style={{
          color: "purple",
          letterSpacing: "9px",
          fontSize: "10px",
          height: "auto",
          position: "absolute",
          bottom: "5",
          left: "300px",
          paddingTop: "190px",
        }}
      >
        Powered by Khalti
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={{ paddingBottom: "20px" }}> Pay via Khalti Wallet</h2>
        <h6
          style={{
            paddingBottom: "40px",
            paddingTop: "20px",
            fontSize: "18px",
          }}
        >
          {" "}
          Enter Khalti Id{" "}
        </h6>

        <input
          type="text"
          placeholder="Enter Phone Number"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          style={{ ...styles.input, marginBottom: "30px" }}
        />

        <div>
          <input
            type="password"
            placeholder="Enter Password / mpin"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ ...styles.input, marginBottom: "30px" }}
          />
        </div>
        <div>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </div>
        <div>
          <a href="#" style={styles.link}>
            Forgot Password?
          </a>
        </div>
        <div>
          <button
            // to="/cancelPayment"
            type="button"
            style={{
              ...styles.cancelButton,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
            <strong>Cancel Payment</strong>
          </button>

          {/* <button type="button" style={styles.cancelButton}> <strong>Cancel Payment</strong></button> */}
        </div>
      </form>

      <img
        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/082018/untitled-1_110.png?lHvIU2N2j1fNmyD5aBrz7ZWc7EE95LxN&itok=eZwfgJRh"
        alt="Powered by Khalti"
        style={{
          width: "225px",
          height: "auto",
          position: "absolute",
          bottom: "5",
          left: "200px", // Adjust the value to move the image a bit to the right
          paddingTop: "425px", // Add padding to the image
        }}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    color: "Black",
    backgroundColor: "dark white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "14px",
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    width: "100%",
    padding: "10px",
    color: "purple",
    backgroundColor: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default PaymentKhalti;
