import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Close } from "@styled-icons/evaicons-solid/Close";

type ModalProps = {
  isOpen: boolean;
  layoutId?: string;
  children: ReactNode;
  closeModal: () => void;
};

const Modal = ({ isOpen, layoutId, children, closeModal }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser && isOpen !== null && isOpen !== undefined) {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot)
      return ReactDOM.createPortal(
        <motion.div
          layoutId={layoutId || ""}
          layout
          // transition={{
          //   layout: {
          //     duration: 1.5,
          //   },
          // }}
          // initial={{ opacity: 0, scale: 0, y: 0 }}
          // animate={{ opacity: 1, scale: 1, y: 0 }}
          // exit={{ opacity: 0, scale: 0, y: 0 }}
        >
          <ImageModal>
            <StyledClose onClick={closeModal} />
            {children}
          </ImageModal>
        </motion.div>,
        modalRoot
      );
    else return null;
  } else return null;
};

export default Modal;

const ImageModal = styled.div`
  position: fixed;
  display: flex;
  z-index: 3;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border: 2px solid white;

  img {
    border-radius: 0;
    cursor: default;
  }
`;

const StyledClose = styled(Close)`
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 1rem;
  background-color: #000;
  /* border-radius: 50%; */
  border: 2px solid white;
  height: 3rem;
  width: 3rem;
  color: #fff;
  transition: color 0.5s;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    /* color: red;
    border-color: red; */
    /* border-radius: 50%; */
  }
  &:active {
    scale: 1;
  }
`;
