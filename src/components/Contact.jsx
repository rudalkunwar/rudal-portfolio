import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formhandeller = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form); // Create FormData object from form

    const endpoint = "https://formspree.io/f/mqkrqqqq";
    try {
      const response = await axios.post(endpoint, formData);
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Error occurred, please try again later.");
      }
    } catch (error) {
      toast.error("Error occurred, please try again later.");
    }
  };
  return (
    <section id="contact" className="pt-12 bg-gray-300 z-40">
      <ToastContainer />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 text-center">
          CONTACT
        </h2>
        <div className="flex flex-col md:flex-row rounded-lg w-full mx-auto md:w-3/4 lg:w-10/12">
          <div className="md:w-1/2 md:h-auto flex items-center justify-center">
            <div className="w-full rounded-lg overflow-hidden h-[400px]">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.383208227319!2d84.42190137497391!3d27.67454862693827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb08742e4669%3A0x6c6f366373993b3!2sBharatpur%20Nepal!5e0!3m2!1sen!2snp!4v1707904454178!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="object-cover h-full w-full"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <div className="mb-4">
                <h6 className="text-gray-600 uppercase font-bold mb-2">
                  Need Help?
                </h6>
                <h1 className="text-4xl font-bold">Send Me A Message</h1>
              </div>
              <div className="w-full mt-4">
                <form
                  className="form-horizontal mx-auto"
                  method="POST"
                  onSubmit={formhandeller}
                >
                  <div className="mb-6">
                    <input
                      type="text"
                      className="w-full shadow-md border-1 border-gray-400 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Your Name"
                      name="name"
                      required="required"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      className="w-full shadow-md border-1 border-gray-400 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Your Email"
                      name="email"
                      required="required"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      className="w-full shadow-md border-1 border-gray-400 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      rows="5"
                      placeholder="Message"
                      name="message"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="w-full text-center">
                    <input
                      type="submit"
                      name="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
