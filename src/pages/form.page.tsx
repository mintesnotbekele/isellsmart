//@ts-ignore
import styles from "./form.module.css";

import React, { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function FormPage() {
  const { state } = useLocation();
  const fileRef = useRef<HTMLInputElement>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>();
  const [images, setImages] = useState<File[]>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [location, setLocation] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [price, setPrice] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [powerOn, setPowerOn] = useState("");
  const [functional, setFunctional] = useState("");
  const [crackFree, setCrackFree] = useState("");

  const handleImageChange = (e) => {
    const { files }: { files: File[] } = e.target;
    const selectedImages = Array.from(files);
    setImages(selectedImages);
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (name == "powerOn") {
      setPowerOn(checked);
    }
    if (name == "functional") {
      setFunctional(checked);
    }
    if (name == "crackFree") {
      setCrackFree(checked);
    }
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    // Send formData to endpoint
    const formData = new FormData();
    formData.append("name", name);
    formData.append("carrier", state.carrier);
    formData.append("storage", state.storage);
    formData.append("model", state.phoneModel);
    formData.append("description", description);
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("whatsappNumber", whatsappNumber);
    formData.append("location", location);
    formData.append("meetingDate", meetingDate);
    formData.append("price", price);
    formData.append("modeOfPayment", modeOfPayment);
    formData.append("powerOn", powerOn);
    formData.append("crackFree", crackFree);
    formData.append("functional", functional);

    images?.map((image) => {
      formData.append("images", image);
    });
    console.log(" Form Data ", formData);

    axios
      .post("https://i-sell-smart.onrender.com/api/item/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast("Successfully submitted!", {
          type: "success",
        });
        if (fileRef?.current) {
          fileRef.current.value = "";
        }
        setIsSubmitting(false);
        setImages([]);
        setModeOfPayment("");
        setName("");
        setDescription("");
        setFullName("");
        setEmail("");
        setWhatsappNumber("");
        setLocation("");
        setMeetingDate("");
        setPowerOn("");
        setCrackFree("");
        setFunctional("");
        setPrice("");
      })
      .catch((error) => {
        console.log(" Error ", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="request-demo"
      style={{ backgroundColor: "black", width: "80%", margin: "0 auto" }}
    >
      <div style={{ opacity: 1 }}>
        <motion.h2
          initial={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{ opacity: 1 }}
          className={styles.header}
        >
          Start selling your iphone now
        </motion.h2>
        <br></br>
      </div>
      <div style={{ opacity: 1, marginBottom: "70px" }}>
        <motion.h6
          initial={{ opacity: 0 }}
          transition={{
            delay: 1.5,
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{ opacity: 1 }}
          className={styles.sub_header}
        >
          Fill up all the details and complete the process
        </motion.h6>
      </div>

      <div className={styles.contain}>
        <div className={styles.contain1}>
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            WhatsApp Number
            <input
              type="tel"
              name="whatsappNumber"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />
          </label>
          <label>
            Location of Meeting
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label>
            Time of Meeting
            <input
              type="datetime-local"
              name="meetingDate"
              value={meetingDate}
              onChange={(e) => setMeetingDate(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.contain2}>
          <label>
            Phone Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          {/* </div> */}
          <label style={{ display: "flex", alignItems: "left" }}>
            {" "}
            Phone Condition{" "}
          </label>

          <label style={{ display: "flex", alignItems: "left" }}>
            {powerOn ? (
              <FaCheckSquare style={{ marginRight: "10px" }} />
            ) : (
              <FaRegSquare style={{ marginRight: "10px" }} />
            )}
            <span style={{ display: "inline-block", marginRight: "10px" }}>
              Does the device power on?
            </span>
            <input
              type="checkbox"
              name="powerOn"
              checked={Boolean(powerOn)}
              onChange={handleCheckboxChange}
              style={{ display: "none" }}
            />
            {/* Does the device power on? */}
          </label>
          <label style={{ display: "flex", alignItems: "left" }}>
            {functional ? (
              <FaCheckSquare style={{ marginRight: "10px" }} />
            ) : (
              <FaRegSquare style={{ marginRight: "10px" }} />
            )}
            <span style={{ display: "inline-block", marginRight: "10px" }}>
              Does the device fully functional?
            </span>

            <input
              type="checkbox"
              name="functional"
              checked={Boolean(functional)}
              onChange={handleCheckboxChange}
              style={{ display: "none" }}
            />
            {/* Does the device fully functional? */}
          </label>
          <label style={{ display: "flex", alignItems: "left" }}>
            {crackFree ? (
              <FaCheckSquare style={{ marginRight: "10px" }} />
            ) : (
              <FaRegSquare style={{ marginRight: "10px" }} />
            )}
            <span style={{ display: "inline-block", marginRight: "10px" }}>
              Are the front and back free of cracks?
            </span>
            <input
              type="checkbox"
              name="crackFree"
              checked={Boolean(crackFree)}
              onChange={handleCheckboxChange}
              style={{ display: "none" }}
            />
            {/* Are the front and back free of cracks? */}
          </label>
          <br></br>
          <label>
            Price
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Payment Method
            <select
              name="modeOfPayment"
              value={modeOfPayment}
              onChange={(e) => setModeOfPayment(e.target.value)}
            >
              <option value="">Select payment method</option>
              <option value="Cash">Cash</option>
              <option value="Pickup">Pickup</option>
              <option value="Paypal">Paypal</option>
              <option value="Transfer">Transfer</option>
            </select>
          </label>
          <label>
            Images (Max 5)
            <input
              ref={fileRef}
              type="file"
              name="images"
              onChange={handleImageChange}
              multiple
              required
            />
          </label>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {images?.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Image ${index}`}
                width="200"
                style={{
                  objectFit: "contain",
                }}
                height="200"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="form-buttons" style={{ textAlign: "right" }}>
        <button
          disabled={isSubmitting}
          type="submit"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "12px 24px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {isSubmitting ? "Submitting Please wait..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default FormPage;
