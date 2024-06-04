import React from "react";
import Layout from "./../components/Layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { BiMailSend ,BiPhoneCall , BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          Address: SJ jewllers,main road karkamb,pandhrpur
          





Business Hours:
Monday - Friday: 8:00AM- 8:00PM
Saturday: 8:00AM- 8:00PM
Sunday: Closed  
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@sjjwellersapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> :9356895242
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;