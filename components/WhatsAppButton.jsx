"use client";
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppButton() {
  const phone = "918797818499";
  const message = "Hi, I need some help.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="whatsapp-button">
        <FaWhatsapp size={30} />
      </div>
      <style jsx>{
      `
        .whatsapp-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          cursor: pointer;
          z-index: 999;
        }
      `
      }</style>
    </a>
  );
}
