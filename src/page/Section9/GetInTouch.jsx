import React from "react";
import { Modal, Form, Input, Button, message } from "antd";
import LogoFoot from "./../../assets/hawkseelogoo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const GetInTouch = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      // Prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isModalOpen]);

  const handleOpen = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setIsSubmitting(true);
      
      // Send data to backend API
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        message.success('Thank you! Your consultation request has been sent successfully. We will get back to you within 24 hours.');
        form.resetFields();
        setIsModalOpen(false);
      } else {
        message.error(result.message || 'Failed to send your request. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      
      // Check if it's a connection error
      if (err.message.includes('Failed to fetch') || err.message.includes('ERR_CONNECTION_REFUSED')) {
        message.error('Unable to connect to server. Please try again later or contact us directly at info@hawksee.in');
      } else {
        message.error('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with ID ${sectionId} not found`);
    }
  };
  return (
    <>
      <footer
        id="contact"
        className="get-in-touch"
        aria-label="Get in touch section"
      >
        <div
          className="get-in-touch__container"
          aria-label="Get in touch container"
        >
          <div className="get-in-touch__top" aria-label="Header row with title and intro">
            <h3 className="get-in-touch__title" aria-label="Get in touch title">
              Get in touch
            </h3>

            <div className="get-in-touch__intro" aria-label="Introductory text and CTA">
              <p>
                Want to work with a world-class marketing team that helped 100+ brands scale?
                Book your free consultation now and get clarity on how to take your business ahead.
              </p>
              <a
                href="#"
                onClick={handleOpen}
                rel="noopener noreferrer"
                className="get-in-touch__cta"
                aria-label="Book free consultation"
              >
                Book free consultation
              </a>
            </div>
          </div>

          <div
            className="get-in-touch__content"
            aria-label="Get in touch content"
          >
            <div className="get-in-touch__logo" aria-label="Get in touch logo">
              <img
                src={LogoFoot}
                alt="Hawksee Logo"
                aria-label="Hawksee Logo"
              />
            </div>
            <div
              className="get-in-touch-about"
              aria-label="Get in touch about section"
            >
              <div
                className="get-in-touch__links"
                aria-label="Links to get in touch"
              >
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => (window.location.href = "/about")}
                  aria-label="Navigate to About Us section"
                  href="/about"
                >
                  About Us
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  // onClick={() => scrollToSection("works")}
                  aria-label="Navigate to Our Works section"
                  href="#projects"
                >
                  Our Works
                </a>
                <a
                  href="https://wa.me/919995000123"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    cursor: "pointer",
                    
                    color: "black",
                    padding: ".6rem 1.2rem",
                    borderRadius: "999px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                  onClick={() => scrollToSection("contact")}
                  aria-label="Contact us via WhatsApp"
                >
                   Contact
                </a>

                <span
                  className="get-in-touch__email"
                  onClick={() => {
                    window.open("mailto:info@hawksee.in", "_blank");
                  }}
                  aria-label="Email address for contact"
                >
                  info@hawksee.in
                </span>
              </div>

              <div
                className="get-in-touch__address"
                aria-label="Get in touch address"
              >
                <h4 aria-label="Location heading for Calicut">Calicut: </h4>
                <p
                  className="addressnote"
                  aria-label="Address for Calicut location"
                >
                  5/639R, 1st Floor,
                  <br />
                  City Gate Building, Sales tax Office
                  <br /> Road, Mini Bypass Rd, Eranhippalam,
                  <br /> Kozhikode, Kerala 673006
                </p>

                <h4
                  style={{ marginTop: "10px" }}
                  aria-label="Location heading for Kochi"
                >
                  Kochi:{" "}
                </h4>
                <p
                  className="addressnote"
                  aria-label="Address for Kochi location"
                >
                  Second Floor,Trine Tower,
                  <br /> Seaport - Airport Rd, near Naipunya <br />
                  Public School, Thrikkakara, Kochi,
                  <br /> Kerala 682021
                </p>

                <a
                  href="tel:+919995000123"
                  className="get-in-touch__phone"
                  aria-label="Phone number for contact"
                >
                  +91 9995000123
                </a>
              </div>
            </div>
            <div
              className="get-in-touch__smContact"
              aria-label="Social media contact information"
            >
              <a
                onClick={() => window.open("mailto:info@hawksee.in", "_blank")}
                aria-label="Email contact for Hawksee"
                href="mailto:info@hawksee.in"
              >
                info@hawksee.in
              </a>

              <a
                onClick={() => window.open("tel:+919995000123")}
                aria-label="Click to call the phone number +91 9995000123"
                href="tel:+919995000123"
              >
                +91 9995000123
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="social-media-container"
        aria-label="Social media container"
      >
        <div
          className="social-media-container__content"
          aria-label="Social media content"
        >
          <a
            href="https://www.facebook.com/hawkseedigital"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our Facebook page"
          >
            <FaFacebookF className="social-media-icon" />
          </a>
          <a
            href="https://www.instagram.com/hawkseedigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram className="social-media-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/hawksee-digital-marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our LinkedIn page"
          >
            <FaLinkedinIn className="social-media-icon" />
          </a>
          <a
            href="https://www.youtube.com/@hawkseedigitalmarketing2411"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our YouTube channel"
          >
            <FaYoutube className="social-media-icon" />
          </a>
          <a
            href="https://wa.me/919995000123"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our WhatsApp chat"
          >
            <FaWhatsapp className="social-media-icon" />
          </a>
          <a
            href="https://www.google.com/maps/dir//5%2F639R,+1st+Floor,City+Gate+Building,Sales+tax+Office+Road,+Mini+Bypass+Rd,+Eranhippalam,+Kozhikode,+Kerala+673006/@11.2731806,75.7049318,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba65eb44503b7ab:0x64560d1415439a42!2m2!1d75.7873337!2d11.273192?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our location on Google Maps"
          >
            <FaMapMarkerAlt className="social-media-icon" />
          </a>
        </div>
        <div className="market">
          Made by{" "}
          <a href="https://www.instagram.com/marketlube/" target="_blank">
            marketlube
          </a>
        </div>
      </div>

      <Modal
        title="BOOK APPOINTMENT"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        destroyOnClose
        wrapClassName="get-in-touch-modal"
        maskClosable={true}
        keyboard={true}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={false}
        >
          <Form.Item name="fullName" label="Full name" rules={[{ required: true, message: "Please enter your full name" }]}> 
            <Input placeholder="e.g. John Mathew" />
          </Form.Item>
          <Form.Item name="email" label="Email address" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}> 
            <Input placeholder="e.g. john@example.com" />
          </Form.Item>
          <Form.Item name="phone" label="Phone number" rules={[{ required: true, message: "Please enter your phone number" }]}> 
            <Input placeholder="e.g. +91 98765 43210" />
          </Form.Item>
          <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please enter a subject" }]}> 
            <Input placeholder="e.g. Need help with digital marketing" />
          </Form.Item>
          <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter your message" }]}> 
            <Input.TextArea placeholder="Write your message here..." rows={4} />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="text" onClick={handleCancel} style={{ color:"#FB3748"}} disabled={isSubmitting}>Cancel</Button>
            <Button type="primary" htmlType="submit" style={{ minWidth: "150px" }} loading={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
