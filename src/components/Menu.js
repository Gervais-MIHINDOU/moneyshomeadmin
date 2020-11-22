


function Menu() {


 return (

    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" class="brand-link">
            <img src="dist/img/logo.jpg" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                 styles="opacity: .8"/>
            <span styles="font-size: 18px;font-family: Times New Roman;"  class="brand-text font-weight-light">ADMIN</span>
        </a>


        <div class="sidebar">

            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="dist/img/user8-128x128.jpg" class="img-circle elevation-2" alt="User Image"/>
                </div>
                <div class="info">
                    <a href="#" class="d-block">Gervais</a>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Tableau de bord
                            </p>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="pages/widgets.html" class="nav-link">
                            <i class="nav-icon fas fa-exclamation-triangle "></i>
                            <p>
                                Demandes client
                                <span class="right badge badge-danger">9</span>
                            </p>
                        </a>
                    </li>


                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-user"></i>
                            <p>
                                Utilisateurs
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>


                            <ul styles="margin-left: 12px;" class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="pages/layout/top-nav.html" class="nav-link">
                                        <i class="nav-icon fas fa-users"></i>
                                        <p>Les clients</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                                        <i class="nav-icon fas fa-users"></i>
                                        <p>Clients non confirmé</p>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="pages/layout/fixed-topnav.html" class="nav-link">
                                        <i class="nav-icon fas fa-user-plus"></i>
                                        <p>Ajouter un client</p>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="pages/layout/boxed.html" class="nav-link">
                                        <i class="nav-icon fas fa-home"></i>
                                        <p>Les boutiquiers</p>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="pages/layout/fixed-topnav.html" class="nav-link">
                                        <i class="nav-icon fas fa-user-plus"></i>
                                        <p>Ajouter un Boutiquier</p>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
                                        <i class="nav-icon fas fa-user-secret"></i>
                                        <p>Les admins</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
                                        <i class="nav-icon fas fa-user-secret"></i>
                                        <p>Les superAdmins</p>
                                    </a>
                                </li>



                            </ul>

                    </li>







                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fa fa-exchange" aria-hidden="true"></i>
                            <p>
                                Transaction client
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul styles="margin-left: 12px;" class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="pages/charts/chartjs.html" class="nav-link">
                                    <i class="nav-icon fas fa-search"></i>
                                    <p>Suivre une transaction</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="pages/charts/flot.html" class="nav-link">
                                    <i class="nav-icon fas fa-search-plus"></i>
                                    <p>Analyser une transaction</p>
                                </a>
                            </li>
                        </ul>
                    </li>



                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fa fa-chart-bar" aria-hidden="true"></i>
                            <p>
                               Statistique Financière
                            </p>
                        </a>
                    </li>


                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-user"></i>
                            <p>
                                Mon compte
                            </p>
                        </a>
                    </li>



                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fa fa-chart-bar"></i>
                            <p>
                                statistique des incidents
                            </p>
                        </a>
                    </li>

                    <li class="nav-header">Information supplementaire</li>
                    <li class="nav-item">
                        <a href="pages/calendar.html" class="nav-link">
                            <i class="nav-icon far fa-calendar-alt"></i>
                            <p>
                                Dates importantes
                                <span class="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>


                    <li class="nav-item">
                        <a href="pages/gallery.html" class="nav-link">
                            <i class="nav-icon far fa-bell"></i>
                            <p>
                                Notification
                                <span class="badge badge-info right">15</span>
                            </p>
                        </a>
                    </li>
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fa-envelope"></i>
                            <p>
                                Message
                                <span class="badge badge-info right">3</span>
                            </p>
                        </a>
                    </li>
                    <br/> <br/> <br/> <br/> <br/> <br/>
                </ul>
            </nav>
        </div>


    </aside>

 )




}

export default Menu;