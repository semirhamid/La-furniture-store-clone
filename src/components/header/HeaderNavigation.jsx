import React from 'react'
import './headernavigation.scss'

export default function HeaderNavigation() {
    return (
        <header>
            <nav className="">
                <ul className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex list-none">
                    <li className="mr-6">
                        <a href="https://www.lafurniturestore.com/specials/new-arrivals.html" className="nav-link"><span>New</span></a>
                    </li>
                    <li className="mr-6 group relative">
                        <a href="#" className="nav-link"><span>Shop</span></a>
                        <div className="absolute left-0 hidden group-hover:block border-0 z-10 p-0 m-0 submenu">
                            <ul className="subchildmenu megamenu relative">
                                <li className="category-item megamenu__submenu">
                                    <div className="">
                                        <div className="">
                                            <a className="menu-thumb-link" href="#">
                                                Living Room
                                            </a>
                                        </div>
                                        <div className="megamenu__submenu-child hidden">
                                            <ul className='w-[330px] megamenu__submenu-items grid grid-cols-2'>
                                                <li>
                                                    <a className='title-link' href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Sofas &amp; Couches</span></a>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Modern Sofas</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Sofa Sets</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-beds.html"><span>Sofa Beds &amp; Sleepers</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/recliners.html"><span>Recliners</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className='title-link' href="https://www.lafurniturestore.com/accents.html"><span>Tables</span></a>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/coffee-tables.html"><span>Coffee Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/accents/end-tables.html"><span>Accent &amp; End Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/accents/console-tables.html"><span>Console Tables</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className='title-link' href="https://www.lafurniturestore.com/occasional-seating/lounge-and-chaise.html"><span>Accent chairs</span></a>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/occasional-seating/lounge-and-chaise.html"><span>Chaise Lounge Chairs &amp; Accent Chairs</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/ottomans.html"><span>Benches, Ottomans &amp; Poufs</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className='title-link' href="https://www.lafurniturestore.com/living-room/shelves.html"><span>Living room storage</span></a>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/entertainment-center.html"><span>TV Stands</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/shelves.html"><span>Bookshelves &amp; Room Dividers</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className='title-link active' href="https://www.lafurniturestore.com/living-room.html"><span>All Living Room</span></a>
                                                </li>
                                            </ul>
                                            <div class="w-[570px]">
                                                <img className='w-full h-full' src="https://www.lafurniturestore.com/media/catalog/category/1-living-room.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="category-item megamenu__submenu">
                                    <div className="">
                                        <div className="">
                                            <a className="menu-thumb-link" href="#">
                                                Living Room
                                            </a>
                                        </div>
                                        <div className="megamenu__submenu-child hidden">
                                            <ul className='w-[330px] megamenu__submenu-items grid grid-cols-2'>
                                                <li>
                                                    <a className='title-link' href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Sofas &amp; Couches</span></a>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Modern Sofas</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Sofa Sets</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-beds.html"><span>abebe Beds &amp; Sleepers</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/recliners.html"><span>Recliners</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className='title-link' href="https://www.lafurniturestore.com/accents.html"><span>Tables</span></a>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/coffee-tables.html"><span>Coffee Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/accents/end-tables.html"><span>Accent &amp; End Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/accents/console-tables.html"><span>Console Tables</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className='title-link' href="https://www.lafurniturestore.com/occasional-seating/lounge-and-chaise.html"><span>Accent chairs</span></a>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/occasional-seating/lounge-and-chaise.html"><span>Chaise Lounge Chairs &amp; Accent Chairs</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/ottomans.html"><span>Benches, Ottomans &amp; Poufs</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className='title-link' href="https://www.lafurniturestore.com/living-room/shelves.html"><span>Living room storage</span></a>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/entertainment-center.html"><span>TV Stands</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/shelves.html"><span>Bookshelves &amp; Room Dividers</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className='title-link active' href="https://www.lafurniturestore.com/living-room.html"><span>All Living Room</span></a>
                                                </li>
                                            </ul>
                                            <div class="w-[570px]">
                                                <img className='w-full h-full' src="https://www.lafurniturestore.com/media/catalog/category/1-living-room.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mr-6">
                        <a href="https://www.lafurniturestore.com/specials/new-arrivals.html" className="nav-link"><span>Collections</span></a>
                    </li>
                    <li className="mr-6 group relative">
                        <a href="#" className="nav-link"><span>Showrooms</span></a>
                        <div className="absolute left-0 hidden group-hover:block border-0 z-10 p-0 m-0 submenu">
                            <ul className="subchildmenu z-20 w-[220px] pl-5 pb-5">
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/la-furniture-showroom-woodland-hills.html"><span>Woodland Hills Showroom, CA</span></a>
                                </li>
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/la-furniture-showroom-los-angeles.html"><span>Los Angeles Design Center, CA</span></a>
                                </li>
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/modern-miami-furniture-showroom-lamod-collection.html"><span>Modern Miami Showroom, FL</span></a>
                                </li>
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/la-furniture-showroom-orange-county.html"><span>Orange County Showroom, CA</span></a>
                                </li>
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/modern-miami-furniture-outlet.html"><span>Modern Miami Factory Outlet, FL</span></a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mr-6 group relative">
                        <a href="#" className="nav-link"><span>Inspiration</span></a>
                        <div className="absolute left-0 hidden group-hover:block border-0 z-10 p-0 m-0 submenu">
                            <ul className="subchildmenu z-20 w-[220px] pl-5 pb-5">
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/la-furniture-showroom-woodland-hills.html"><span>Bestsellers</span></a>
                                </li>
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/la-furniture-showroom-los-angeles.html"><span>Customer Photo Gallery</span></a>
                                </li>
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/modern-miami-furniture-showroom-lamod-collection.html"><span>Shop The Look</span></a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mr-6 group relative">
                        <a href="#" className="nav-link"><span>Local Deals</span></a>
                        <div className="absolute left-0 hidden group-hover:block border-0 z-10 p-0 m-0 submenu">
                            <ul className="subchildmenu z-20 w-[220px] pl-5 pb-5">
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/la-furniture-showroom-woodland-hills.html"><span>Limited Time Offers</span></a>
                                </li>
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/la-furniture-showroom-los-angeles.html"><span>Clearance</span></a>
                                </li>
                                <li className="category-item">
                                    <a href=" https://www.lafurniturestore.com/special/modern-miami-furniture-showroom-lamod-collection.html"><span>Open Box Deals</span></a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mr-6">
                        <a href="https://www.lafurniturestore.com/specials/new-arrivals.html" className="text-[#f35643] nav-link"><span>Flash Sale</span></a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
