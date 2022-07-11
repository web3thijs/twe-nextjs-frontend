import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

type ModalProps = {
    isModalOpen: boolean
    hideModal: Function
}

function Modal({ isModalOpen, hideModal, children }: React.PropsWithChildren<ModalProps>) {
    const ref = useRef<any>(null);
    
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                hideModal()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [hideModal]);

    if(!isModalOpen) return <></>

    return <>
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-screen bg-black/50 grid place-content-center" id="modal">
            <div ref={ref} className="bg-white rounded-xl text-center p-10 relative">
                <FontAwesomeIcon icon={faTimes as IconProp} className="text-gray-light absolute top-5 right-5 cursor-pointer" onClick={() => hideModal()}/>
                {children}
            </div>
        </div>
    </>
}

export default Modal;