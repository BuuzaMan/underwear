import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div className="modal flex fixed w-full h-full bg-black bg-opacity-30">
      <div className="modal-content w-[800px] h-[800px] bg-red-100">
        Привет
      </div>
    </div>,
    document.getElementById("modal-container") as HTMLElement
  );
};

export default Modal;