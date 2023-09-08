import Ethereum from "../img/Ethereum.png"
import "../scss/styles.css"
import {MenuResponsivo} from "../elementos/MenuResponsivo";
import { Link, Input, Button } from "@nextui-org/react";
import { SearchIcon } from "../elementos/SearchIcon.jsx";
import React from "react";
import { useState, useEffect } from "react"
import Web3 from 'web3';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Saldo from './Saldo.jsx';

function NavbarMenu() {
  const [web3, setWeb3] = useState(null);     //guardar instancia de web3
  const [account, setAccount] = useState(null); //guardar cuenta 
  const [balance, setBalance] = useState(null); //guardar el balance
  const [contract, setContract] = useState(null);
  const [verificacionWallet, setVerificacionWallet] = useState(false); //verificacion si tenemos una wallet en el navegador
  // Manejar el estado de conexion de la wallet (reemplazo de ButtonWallet)
  const [isWalletConnected, setIsWalletConnected] = useState(null);
  // -------------------------------------------
  const MySwal = withReactContent(Swal);
  //Funcion para conectar wallet
  const conectarWallet = async () => {
    if (typeof window.ethereum !== 'undefined') { // Verificamos si tenemos metamask
      const web3Instance = new Web3(window.ethereum); //guardamos el obj de eth
      setWeb3(web3Instance);
      try {
        await window.ethereum.enable(); //Solicitamos el acceso a la wallet
        // Obtener la dirección de la cuenta actual
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
        // Obtener el saldo de la cuenta
        const balanceWei = await web3Instance.eth.getBalance(accounts[0]);  // Representa el saldo de una cuenta en wei
        const balanceEth = web3Instance.utils.fromWei(balanceWei, 'ether'); // Convertir el saldo en wei a ethe
        setBalance(balanceEth);
        // Actualizar el estodo de conexión de la wallet
        setIsWalletConnected(true);
        // ---------------------------------------------
        // Guardar el tiempo actual en el sessionStorage para empezar a contar 1 hora
        // que es el tiempo que se mantendra conectadaa la wallet al menos que se cierre la pestaña o el navegador
        sessionStorage.setItem('walletConnectedTime', Date.now());
        // -------------------------------------------
        const contractInstance = new web3Instance.eth.Contract(
          smartContractRegistro,
          smartContractRegistro && "0x34D44DBc2c73B0eCb4bC738bfB850f92AaB89ae2"
        ); //crear una instancia
        setContract(contractInstance);
        // llamado de metodos
      } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error en caso de que el usuario rechaze la conexion a la wallet una vez presionado el boton.
        if (error.message.includes('User rejected')) {
          MySwal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Se ha rechazado la conexión'
          });
        } else {
          MySwal.fire({
            icon: 'success',
            title: 'Enhorabuena',
            text: 'Conectado'
          });
        }
      };
    } else {
      setVerificacionWallet(false);
    };
  };

  // ------------------------------- NUEVO CODIGO AGREGADO ------------------------------ //

  // Función para desconectar la wallet
  const desconectarWallet = async () => {
    try {
      // Mostramos un mensaje de eleccion para desconectar la wallet
      const result = await MySwal.fire({
        title: '¿Desea desconectar su Wallet actual?',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      });

      // Si el usuario confirma la desconexion, desconectamos la wallet
      if (result.isConfirmed) {
        // Limpiamos el estado de la aplicación
        setWeb3(null);
        setAccount(null);
        setBalance(null);
        setContract(null);
        // Actualizar el estado de conexión de la wallet
        setIsWalletConnected(false);
        // Borrar el tiempo de conexión de la wallet de sessionStorage
        sessionStorage.removeItem('walletConnectedTime');
        // Mostramos un mensaje de éxito
        MySwal.fire({
          icon: 'success',
          title: 'Desconectado',
          text: 'Wallet desconectada'
        });
      }

    } catch (error) {
      console.error(error);
    }
  };

  // Función para comprobar el estado de conexion
  const getAccounts = async () => {
    if (isWalletConnected) {
      console.log('La wallet está conectada a esta aplicación');
    } else {
      console.log('La wallet no está conectada a esta aplicación');
    }
  };

  // useEffect para verificar el estado de la conexion cada vez que cambia isWalletConnected
  useEffect(() => {
    if (isWalletConnected !== null) {
      getAccounts();
    }
  }, [isWalletConnected]);

  // Al recargar la página...
  useEffect(() => {
    // Obtener el tiempo de conexión de la wallet del sessionStorage
    const walletConnectedTime = sessionStorage.getItem('walletConnectedTime');

    // Si ha pasado menos de 1 hora desde que la wallet se conectó por última vez 
    // entonces se reconecta automaticamente al refrescar la pagina.
    if (walletConnectedTime && Date.now() - walletConnectedTime < 1 * 60 * 60 * 1000) {
      // Conectar la wallet
      conectarWallet();
    }
  }, []);
  // ------------------------------- FIN NUEVO CODIGO AGREGADO ------------------------------- //

  useEffect(() => {
    async function Wallet() { //verificacion si tenemos una wallet disponible
      if (typeof window.ethereum !== 'undefined') {
        setVerificacionWallet(true);
      };
    };
    Wallet();
  }, []);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
         {/*Logo*/}
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
            <a href="#" className="nav__logo">DIGITAL MARKETPLACE</a>
              <li className="nav__item">
                <a href="#" className="nav__link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Contacto</a>
              </li>
              <li className="nav__item"> {/*Saldo wallet*/}
                <a className="nav__link"><Saldo account={account} balance={balance} contract={contract} /></a>
              </li>
              <li className="nav__item"> {/*Input buscador*/}
                <a className="nav__link">
                <Input classNames={{
                  base: "max-w-full sm:max-w-[10rem] h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                  }}
                  placeholder="Buscar..."
                  size="sm"
                  startContent={<SearchIcon size={20} />}
                  type="search"
                /></a>
              </li>
              <li className="nav__item"> {/*Boton conexion wallet*/}
                <a className="nav__link">{verificacionWallet ? ( 
                <>{/* conexion wallet */}{/* // Modificación al botón para que muestre "Desconectar Wallet" cuando la wallet está conectada */}
                {isWalletConnected ? (
                    <Button onClick={desconectarWallet} as={Link} color="warning" href="#" variant="flat">Desconectar Wallet</Button>
                  ):(
                    <Button onClick={conectarWallet} as={Link} color="warning" href="#" variant="flat">Conectar</Button>
                  )}
                </>
              ) : (
                <h1>¡Importante! Para comenzar en esta plataforma, es esencial que crees una billetera (wallet) antes de proceder. La billetera te permitirá gestionar y asegurar tus activos de manera segura. No olvides configurar una billetera antes de continuar para asegurarte de que todas tus transacciones estén protegidas. ¡Empieza tu viaje hacia un mundo de posibilidades asegurando tus activos con una billetera adecuada!</h1>
              )}
                </a>
              </li>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className='bx bx-x'></i>
            </div>
          </div>
          <div className="nav__toggle" id="nav-toggle" onClick={MenuResponsivo}> {/*icono menu responsivo*/}
            <i className='bx bx-grid-alt'></i>
          </div>
        </nav>
      </header>
      <main className="main"> {/*Parte del logo flotante*/}
        <section className="home">
          <div className="home__container container">
            <div className="home__data">
              <span className="home__subtitle">Bienvenido</span>
              <h1 className="home__title">¿Estas buscando los mejores activos digitales?</h1>
              <p className="home__description">¡El blockchain esta aqui! <br /> ¡Y tu puedes ser parte de esta nueva era!.</p>
              <a href="#" className="home__button animate__animated animate__backInLeft">Ir a mejores ofertas</a>
            </div>
            <div className="home__img">
              <img src={Ethereum} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default NavbarMenu