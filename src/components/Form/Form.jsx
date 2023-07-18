import React,{useState} from "react";
import styles from "./form.module.css";
import { motion } from "framer-motion";
import axios from 'axios';
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    description: '',
    fullName: '',
    email: '',
    whatsappNumber: '',
    location: '',
    meetingDate: '',
    price: '',
    modeOfPayment: 'Cash',
    powerOn: '',
    functional: '',
    crackFree: '',
    images: [],
  });

  const handleChange = (event) => {
    const { name, type, value, checked, files } = event.target;
    const newValue = type === 'checkbox' ? checked : files ? Array.from(files) : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(" Form : ", formData);
     const URL= "https://i-sell-smart.onrender.com/api/item/create"
                // Send form data to API
    axios.post(URL, formData, {
      headers: {
    'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
                console.log(" Response ",response)
                  if (response.ok) {
                    alert('Form submitted successfully!');
                    setFormData([])
                  } else {
                    alert('Form submission failed. Please try again.');
                  }
                })
           .catch(error => {
                  console.error('Error:', error);
            });
    // handle form submission here
  };

  return (
    <form className={styles.container} id="request-demo" method="POST" onSubmit={handleSubmit} enctype="application/x-www-form-urlencoded">
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
     Start selling your Iphone now
        </motion.h2>
      </div>
      <div style={{ opacity: 1 }}>
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
      <div className={styles.form_container}>
        <div
          style={{
            opacity: 1,
          }}>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 1.8,
              duration: 1.5,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{ opacity: 1 }}
            className={styles.form_wrapper}
          >
            
          <span>
            <h4>Phone  Details</h4>
            <input
              required
                type="text"
                name="name"
              className={styles.input}
                placeholder="Phone Name"
                onChange={handleChange}
              />
            <input
              required
                type="text"
                name="model"
              className={styles.input}
                placeholder="Phone Model"
                                onChange={handleChange}

              />
            <textarea
                required
                rows={4}
              type="textarea"
              name="description"
              className={styles.input}
                placeholder="Phone Description"
                                onChange={handleChange}

              />
             
          </span>
          <span>
            <h4>Seller Details</h4>
            <input
              required
              type="text"
              name="fullName"
              className={styles.input}
                placeholder="Full Name"
                                onChange={handleChange}

              // value={formData.fullName}
              />
            <input
              required
              type="email"
              name="email"
              className={styles.input}
                placeholder="Email"
                                onChange={handleChange}

              // value={formData.email}
              />
            <input
               required
                type="text"
              name="whatsappNumber"
              className={styles.input}
                placeholder="Whatsapp Number"
                                onChange={handleChange}

                // value={formData.whatsappNumber}
              />
            <input
              required
              name="location"
              type="text"
              className={styles.input}
                placeholder="Location"
                                onChange={handleChange}

                // value={formData.location}
            />
             <input
              required
                type="number"
                name="price"
              className={styles.input}
                placeholder="Price"
                                onChange={handleChange}

                // value={formData.price}
              />
              <input
                required
              name="meetingDate"
              type="datetime-local"
              className={styles.input}
                placeholder="Time and Data of Meeting"
                                onChange={handleChange}

                // value={formData.meetingDate}
              />
              <label for="modeOfPayment">  Mode of Payment      </label>
              <select  name="modeOfPayment"  required                  onChange={handleChange}
>
                <option value="Cash">Cash</option>
                <option value="PayPal">PayPal</option>
                <option value="Transfer">Transfer</option>
                <option value="Pickup">Pickup</option>
              </select>
              <br>
              </br>
            </span>

            <span>
              <h4>Phone Condition</h4>
              <input type="checkbox" id="powerOn" name="powerOn" value="Yes" onChange={handleChange}/>
                <label for="powerOn"> Does the device power on?</label><br></br>
              <input type="checkbox" id="functional" name="functional" value="Yes" onChange={handleChange}/>
                <label for="functional">Is the device fully functional and all parts of the screen light up correctly?</label><br></br>
              <input type="checkbox" id="crackFree" name="crackFree"   value="Yes"  onChange={handleChange}/>
               <label for="crackFree">Are the front and back free of cracks?</label>
              <input type="file"  id="images"     name="images"   multiple accept="image/*" onChange={handleChange} required />
                    
            </span>
          </motion.div>
            <button className={styles.button}>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
