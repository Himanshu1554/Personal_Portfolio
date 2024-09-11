import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { slideIn, zoomIn, staggerContainer, fadeIn } from "../utils/motion";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";



const Contact = () => {

  const combinedAnimation = (direction, type, delay, duration) => {
    return {
      hidden: {
      ...slideIn(direction, type, delay, duration).hidden,
      ...zoomIn(delay, duration).hidden,
      },
      show: {
        ...slideIn(direction, type, delay, duration).show,
        ...zoomIn(delay, duration).show,
      },
    }
  };

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;

    setForm({ ...form, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_lggfr3d',
      'template_7ku1klr',
      {
        from_name: form.name,
        to_name: 'Himanshu',
        from_email: form.email,
        to_email: 'prajapatihimanshu274@gmail.com',
        message: form.message,
      },
      'EpejravSHQMO9blut'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will be get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);
      alert('Something went Wrong!');
    })
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding}
        mx-auto realtive z-0 max-w-[90rem]`}
    >
      <span className="hash-span" id='contact'>
        {/* &nbsp; */}
      </span>

      <div
        className="lg:flex-row flex-col flex lg:gap-8 gap-10"
      >
        <motion.div
          variants={combinedAnimation("left", "tween", 0.1, 0.7)}
          className="lg:flex-[0.5] flex-1 bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact me.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 
            placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 
            placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Message</span>
              <textarea
                row="10"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="bg-tertiary py-4 px-6 
            placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none
          w-fit text-white font-bold shadow-md shadow-primary
          rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row flex-1 lg:flex-[0.5]">
          <motion.div 
          variants={fadeIn("top", "swing", 0.7, 0.7)}
          initial="hidden"
          animate="show"
          className="sm:absolute sm:top-4 sm:left-4 z-10
               relative sm:w-auto w-full p-2 bg-[#2a244a] text-white rounded-xl sm:rounded-lg"
          >
            <p>Himanshu Kumar Prajapati,</p>
            <p>India,</p>
            <p>Mandi Gobindgarh</p>
            <p>Punjab</p>
            <span>prajapatihimanshu274@gmail.com</span>
          </motion.div>

          <div
           className='bg-tertiary
           w-full h-[300px] sm:h-[400px] lg:h-full relative z-[1] rounded-2xl'
          >
            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1)}
              initial="hidden"
              animate="show"
              className="w-full h-full"
            >
              <MapContainer center={[30.667477, 76.299407]} zoom={13} style={{ borderRadius: '15px', height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[30.667477, 76.299407]}>
                  <Popup>Hey! Wanna Know where do I live</Popup>
                </Marker>
              </MapContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
