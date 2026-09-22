"use client";

import ContactChannels from '../../components/ ContactChannels';
import ContactSection from '../../components/contact/ContactSection';
import ContactUsForm from '../../components/contact/ContactUsForm';
import Faqs from '../../components/Faqs';
export default function Contact() {
  return (
    <>  
      <ContactSection/>
      <ContactUsForm/>
      <ContactChannels/>
    </>
  );
}