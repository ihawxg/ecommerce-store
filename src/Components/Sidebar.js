import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.jpg'
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants'
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';


const Sidebar = () => {

  const { myUser } = useUserContext();
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return <SidebarContainer>
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className="logo" alt="logo" />
        <button className='close-btn' type='button' onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className="links">
        {links.map(link => {
          const { id, text, url } = link;
          return <li key={id}> <Link to={url} onClick={closeSidebar}>{text}</Link></li>
        })}
        {myUser &&
          <li>
            <Link to='/checkout' onClick={closeSidebar}>checkout</Link>
          </li>
        }
        <li>
          <Link to='/checkout' onClick={closeSidebar} >checkout</Link>
        </li>
      </ul>
      <CartButtons></CartButtons>
    </aside>
  </SidebarContainer>
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
