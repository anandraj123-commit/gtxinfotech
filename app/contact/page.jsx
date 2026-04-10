"use client";

import Navbar from '../../components/Navbar';
import ContactSection from '../../components/contact/ContactSection';
import ContactUsForm from '../../components/contact/ContactUsForm';
import Faqs from '../../components/Faqs';
export default function Contact() {
  return (
    <>
      <Navbar/>
      <ContactSection/>
      <ContactUsForm/>
      <Faqs/>
    </>
  );
}