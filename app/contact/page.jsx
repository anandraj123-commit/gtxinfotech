
import ContactChannels from '../../components/ ContactChannels';
import ContactSection from '../../components/contact/ContactSection';
import ContactUsForm from '../../components/contact/ContactUsForm';

export const metadata = {
  title: " Contact ZisanTech Solutions | SAP, IT & Training Enquiries.",
  description:
    "Contact ZisanTech Solutions for SAP consulting, IT services, ERP development, and online SAP training enquiries. Call +91 8797818499 or +91 8368753435, or email info@zisantech.com.",
};

export default function Contact() {
  return (
    <>  
      <ContactSection/>
      <ContactUsForm/>
      <ContactChannels/>
    </>
  );
}