"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center  backdrop-blur-sm">
      <div className="loader"></div>

      <style jsx>{`
        .loader {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 6px solid transparent;
          border-top: 6px solid #ff6a00;
          border-right: 6px solid #00c2ff;
          border-bottom: 6px solid #00d084;
          border-left: 6px solid #ff3b7a;
          animation: spin 0.8s linear infinite;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}