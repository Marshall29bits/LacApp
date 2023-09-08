import nft1 from "../img/nft1.jpg";
import nft2 from "../img/nft2.jpg";
import nft3 from "../img/nft3.jpg";
import nft4 from "../img/nft4.jpg";
import nft5 from "../img/nft5.jpg";
import React from "react";
import {Badge, Button, Avatar, Switch, Pagination} from "@nextui-org/react";
import {NotificationIcon} from "../elementos/NotificationIcon";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {CartIcon} from "../elementos/CartIcon";
import ModalDetalleProducto from "./ModalDetalleProducto";


<ModalDetalleProducto/>
export default function Cuerpo({ onOpenModal, onOpenModal2, onOpenModal3 }) {
  const [isInvisible, setIsInvisible] = React.useState(false);
  return (

    <section className="section-principal">
     <div className="flex items-center gap-4 contenido-ui">
      <div className="flex items-center gap-3">
        <Badge color="danger" content={5} isInvisible={isInvisible} shape="circle">
          <NotificationIcon className="fill-current" size={30} />
        </Badge>
        <Badge color="danger" content={50} isInvisible={isInvisible} shape="circle">
          <CartIcon size={30} />
        </Badge>
        <Switch isSelected={!isInvisible} onValueChange={(value) => setIsInvisible(!value)}>Mostrar</Switch>
      </div>
    </div>
    
      <div className="divCardPadre">
        
        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img src={nft2} className="card-img-top" style={{ height: "15rem" }} />
          <div className="card-body card-body-border text-light p-4">
            <h5 className="card-title text-center">Producto</h5>
            <p className="card-text text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="verMas-comprar">
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-700 text-white shadow-lg" > Comprar <i class="bi bi-cart4"></i></Button>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg" onPress={onOpenModal}>Ver mas<i class="bi bi-plus-square-dotted"></i></Button>
            </div>
          </div>
        </div>

        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img src={nft3} className="card-img-top" style={{ height: "15rem" }} />
          <div className="card-body card-body-border text-light p-4">
            <h5 className="card-title text-center">Producto</h5>
            <p className="card-text text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="verMas-comprar">
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-700 text-white shadow-lg"> Comprar <i class="bi bi-cart4"></i></Button>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg" onPress={onOpenModal}>Ver mas<i class="bi bi-plus-square-dotted"></i></Button>
            </div>
          </div>
        </div>

        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img src={nft5} className="card-img-top" style={{ height: "15rem" }} />
          <div className="card-body card-body-border text-light p-4">
            <h5 className="card-title text-center">Producto</h5>
            <p className="card-text text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="verMas-comprar">
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-700 text-white shadow-lg"> Comprar <i class="bi bi-cart4"></i></Button>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg" onPress={onOpenModal}>Ver mas<i class="bi bi-plus-square-dotted"></i></Button>
            </div>
          </div>
        </div>

        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img src={nft4} className="card-img-top" style={{ height: "15rem" }} />
          <div className="card-body card-body-border text-light p-4">
            <h5 className="card-title text-center">Producto</h5>
            <p className="card-text text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="verMas-comprar">
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-700 text-white shadow-lg"> Comprar <i class="bi bi-cart4"></i></Button>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg" onPress={onOpenModal}>Ver mas<i class="bi bi-plus-square-dotted"></i></Button>
            </div>
          </div>
        </div>

        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img src={nft3} className="card-img-top" style={{ height: "15rem" }} />
          <div className="card-body card-body-border text-light p-4">
            <h5 className="card-title text-center">Producto</h5>
            <p className="card-text text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="verMas-comprar">
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-700 text-white shadow-lg"> Comprar <i class="bi bi-cart4"></i></Button>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg" onPress={onOpenModal}>Ver mas<i class="bi bi-plus-square-dotted"></i></Button>
            </div>
          </div>
        </div>

        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img src={nft1} className="card-img-top" style={{ height: "15rem" }} />
          <div className="card-body card-body-border text-light p-4">
            <h5 className="card-title text-center">Producto</h5>
            <p className="card-text text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="verMas-comprar">
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-700 text-white shadow-lg"> Comprar <i class="bi bi-cart4"></i></Button>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg" onPress={onOpenModal}>Ver mas<i class="bi bi-plus-square-dotted"></i></Button>
            </div>
          </div>
        </div>

        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img src={nft2} className="card-img-top" style={{ height: "15rem" }} />
          <div className="card-body card-body-border text-light p-4">
            <h5 className="card-title text-center">Producto</h5>
            <p className="card-text text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="verMas-comprar">
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-700 text-white shadow-lg"> Comprar <i class="bi bi-cart4"></i></Button>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg" onPress={onOpenModal}>Ver mas<i class="bi bi-plus-square-dotted"></i></Button>
            </div>
          </div>
        </div>

        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img src={nft5} className="card-img-top" style={{ height: "15rem" }} />
          <div className="card-body card-body-border text-light p-4">
            <h5 className="card-title text-center">Producto</h5>
            <p className="card-text text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="verMas-comprar">
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-700 text-white shadow-lg"> Comprar <i class="bi bi-cart4"></i></Button>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg" onPress={onOpenModal}>Ver mas<i class="bi bi-plus-square-dotted"></i></Button>
            </div>
          </div>
        </div>

        
        
      </div>
      <div className="div-pagination">
      <Pagination total={10} initialPage={1}/>
      </div>
     
    </section>
    
  );
}
