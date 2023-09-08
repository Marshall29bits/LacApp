//ModalDetalleProducto
import nft1 from "../img/nft1.jpg";
import nft2 from "../img/nft2.jpg";
import nft3 from "../img/nft3.jpg";
import nft4 from "../img/nft4.jpg";
import nft5 from "../img/nft5.jpg";
import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import Cuerpo from "./Cuerpo";

export default function ModalDetalleProducto() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Función para abrir el modal
  const handleOpenModal = () => {
    onOpen();
  };

  return (
    <>
      {/* Pasa la función handleOpenModal como prop a Cuerpo */}
      <Cuerpo onOpenModal={handleOpenModal} />

      <Modal isOpen={isOpen} onClose={onClose} backdrop="transparent" size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Detalle del producto</ModalHeader>
              <ModalBody>
                {/* Contenido del modal */

                    <section class="py-5">
                    <div class="container px-4 px-lg-5 my-5">
                        <div class="row gx-4 gx-lg-5 align-items-center">
                            <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={nft2} alt="..." /></div>
                                    
                            <div class="col-md-6">
                                <div class="small mb-1"><h2 class="display-7 fw-bolder">SKU: ABC-1</h2></div>
                                <h2 class="display-6 fw-bolder">Producto1</h2>
                                <div class="fs-5 mb-5">
                                    <span class="text-decoration-line-through">$ 4321.78</span>
                                    <span> $ 1234.01</span>
                                </div>
                                <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum ducimus natus in vero.</p>
                                <div class="d-flex">
                                    {/* <button class="btn btn-outline-dark flex-shrink-0" type="button" onclick="agregarAlCarrito()">
                                        <i class="bi-cart-fill me-1"></i>
                                        Add to cart
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>       
                }
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      
    </>
  );
}