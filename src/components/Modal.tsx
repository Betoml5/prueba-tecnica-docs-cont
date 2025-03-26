import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 max-w-lg max-h-[80vh] overflow-y-auto shadow-lg md:max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
