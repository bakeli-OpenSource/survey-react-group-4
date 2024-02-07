import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dashbord.css';

function Dashboard() {
    const [style, setStyle] = useState("navbar-nav  sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav  sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav  sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav  sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav  sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav  sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav  sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                                {/* <i className="fas fa-laugh-wink"></i> */}
                            </div>
                            <div className="logos sidebar-brand-text mx-3">RDXFORM</div>
                            <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div>
                        </a>

                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li>

                      
                        <hr className="sidebar-divider" />

    
                 
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span className='fw-bold'>Mes Sondage</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span className='fw-bold'>Setting</span></a>
                        </li>

                        <hr className="sidebar-divider d-none d-md-block" />
                 
                        </ul>


                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>


                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">

                       
                               


                                    {/* <!-- Nav Item - User Information --> */}
                                    <li className=" user nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Ndiande </span>
                                            <img className="img-profile rounded-circle"
                                                src="img/undraw_profile.svg" />
                                        </a>
                                        {/*  <!-- Dropdown - User Information --> */}
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">
                                         
                                        
                                           
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </a>
                                        </div>
                                    </li>

                                </ul>

                            </nav>
                       

                            <div className="container-fluid">

                                {/*  <!-- Page Heading --> */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 ">Tableaux de Bord</h1>
                
                                    <Link to="/sondage" className="btn btn2">
                                     <i className="fa-solid fa-plus m-2 fw-bold"></i> Créer un sondage
                                     </Link>
                                    
                                </div>

                          <hr/>
                          <p>
                            
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra hendrerit lorem, eget efficitur risus euismod ac. Nam maximus sit amet leo interdum faucibus. Phasellus dictum, enim in tincidunt commodo, mi nunc lacinia sapien, eget placerat ligula dolor in metus. Vivamus ac ante in lorem tristique luctus. Duis tincidunt augue vitae augue accumsan, a dictum enim egestas. Sed ut massa erat. Duis mattis sollicitudin neque non tempus. Nulla ornare maximus posuere.

Pellentesque suscipit tristique semper. Nulla quis sagittis odio. Nullam eu justo quis lectus condimentum volutpat sed dignissim justo. Cras porttitor maximus felis, ac faucibus nulla semper eu. Suspendisse vel arcu nibh. Cras tincidunt ante quis hendrerit lobortis. Phasellus quam libero, lacinia eget justo eu, aliquam egestas nibh. Morbi ac tortor ac libero ultrices condimentum. Nunc et nibh justo. Nulla tristique viverra neque, id blandit dui iaculis ac. Nunc mauris risus, elementum a elit sit amet, posuere imperdiet leo. Morbi elementum turpis eget facilisis aliquet. Duis eleifend tincidunt quam, id suscipit dui fringilla vitae.

                          </p>
                     


                            </div>

                        </div>
  

                    </div>

                </div>

                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

             
            </body>
        </div>
    )
}

export default Dashboard;   
