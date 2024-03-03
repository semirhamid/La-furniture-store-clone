import React from 'react'
import './headernavigation.scss'

export default function HeaderNavigation() {
    return (
        <header>
            <nav className="flex justify-between max-w-limit mx-auto ">
                <ul className="px-2 sm:px-4 lg:px-0 flex list-none">
                    <li className="mr-[25px]">
                        <a href="https://www.lafurniturestore.com/specials/new-arrivals.html" className="nav-link"><span>New</span></a>
                    </li>
                    <li className="mr-[25px] group relative">
                        <a href="#" className="nav-link"><span>Shop</span></a>
                        <div className="absolute -left-16 hidden group-hover:block border-0 z-10 p-0 m-0 submenu">
                            <ul className="subchildmenu megamenu relative pl-5 pb-5">
                                <li className="category-item megamenu__submenu">
                                    <div className="">
                                        <div className="">
                                            <a className="menu-thumb-link flex justify-between" href="#">
                                                Living Room
                                                <span>
                                                    <svg

                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19"
                                                        height="19"
                                                        fill="#CFCFCF"
                                                        version="1.1"
                                                        viewBox="0 0 24 24"
                                                        xmlSpace="preserve"
                                                    >
                                                        <path stroke='4px' d="M6.8 23.7L5.4 22.3 15.7 12 5.4 1.7 6.8 0.3 18.5 12z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="megamenu__submenu-child hidden">
                                            <ul className='w-[330px] megamenu__submenu-items grid grid-cols-2'>
                                                <li>
                                                    <div className='title-link'>
                                                        <a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Sofas &amp; Couches</span></a>
                                                    </div>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Modern Sofas</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Sofa Sets</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-beds.html"><span>Sofa Beds &amp; Sleepers</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/recliners.html"><span>Recliners</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className='title-link'>

                                                        <a className='title-link' href="https://www.lafurniturestore.com/accents.html"><span>Tables</span></a>
                                                    </div>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/coffee-tables.html"><span>Coffee Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/accents/end-tables.html"><span>Accent &amp; End Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/accents/console-tables.html"><span>Console Tables</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className='title-link'>

                                                        <a className='title-link' href="https://www.lafurniturestore.com/occasional-seating/lounge-and-chaise.html"><span>Accent chairs</span></a>
                                                    </div>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/occasional-seating/lounge-and-chaise.html"><span>Chaise Lounge Chairs &amp; Accent Chairs</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/ottomans.html"><span>Benches, Ottomans &amp; Poufs</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className='title-link'>

                                                        <a className='title-link' href="https://www.lafurniturestore.com/living-room/shelves.html"><span>Living room storage</span></a>
                                                    </div>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/entertainment-center.html"><span>TV Stands</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/shelves.html"><span>Bookshelves &amp; Room Dividers</span></a></li>
                                                    </ul>
                                                </li>
                                                <li></li>
                                                <li>
                                                    <a className='title-link active text-active' href="https://www.lafurniturestore.com/living-room.html"><span>All Living Room</span></a>
                                                </li>
                                            </ul>
                                            <div className="w-[570px]">
                                                <img className='w-full h-full' src="https://www.lafurniturestore.com/media/catalog/category/1-living-room.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="category-item megamenu__submenu">
                                    <div className="">
                                        <div className="">
                                            <a className="menu-thumb-link flex justify-between" href="#">
                                                BedRoom
                                                <span>
                                                    <svg

                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19"
                                                        height="19"
                                                        fill="#CFCFCF"
                                                        version="1.1"
                                                        viewBox="0 0 24 24"
                                                        xmlSpace="preserve"
                                                    >
                                                        <path stroke='4px' d="M6.8 23.7L5.4 22.3 15.7 12 5.4 1.7 6.8 0.3 18.5 12z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="megamenu__submenu-child hidden">
                                            <ul className='w-[330px] megamenu__submenu-items grid grid-cols-2'>
                                                <li>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Bedroom Sets</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Beds</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Dressers & Chests</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-beds.html"><span>Nightstands & Bedside Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/recliners.html"><span>Floor & Wall Mirrors</span></a></li>
                                                        <li>
                                                            <a className='title-link active text-active' href="https://www.lafurniturestore.com/living-room.html"><span>ALL BEDROOM</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="w-[570px]">
                                                <img className='w-full h-full' src="https://www.lafurniturestore.com/media/catalog/category/2-bed-room.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="category-item megamenu__submenu">
                                    <div className="">
                                        <div className="">
                                            <a className="menu-thumb-link flex justify-between" href="#">
                                                Dinning Room
                                                <span>
                                                    <svg

                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19"
                                                        height="19"
                                                        fill="#CFCFCF"
                                                        version="1.1"
                                                        viewBox="0 0 24 24"
                                                        xmlSpace="preserve"
                                                    >
                                                        <path stroke='4px' d="M6.8 23.7L5.4 22.3 15.7 12 5.4 1.7 6.8 0.3 18.5 12z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="megamenu__submenu-child hidden">
                                            <ul className='w-[330px] megamenu__submenu-items grid grid-cols-2'>
                                                <li>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Modern Dining Table Sets</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Dining & Kitchen Table</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Dining Chairs</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-beds.html"><span>Buffets & Sideboards</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/recliners.html"><span>Dining Benches</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/recliners.html"><span>Bar & Counter Stools</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/recliners.html"><span>Bar Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/recliners.html"><span>Display Units</span></a></li>
                                                        <li>
                                                            <a className='title-link active text-active' href="https://www.lafurniturestore.com/living-room.html"><span>ALL DINING ROOM</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="w-[570px]">
                                                <img className='w-full h-full' src="https://www.lafurniturestore.com/media/catalog/category/3-dining-room.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="category-item megamenu__submenu">
                                    <div className="">
                                        <div className="">
                                            <a className="menu-thumb-link flex justify-between" href="#">
                                                Office
                                                <span>
                                                    <svg

                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19"
                                                        height="19"
                                                        fill="#CFCFCF"
                                                        version="1.1"
                                                        viewBox="0 0 24 24"
                                                        xmlSpace="preserve"
                                                    >
                                                        <path stroke='4px' d="M6.8 23.7L5.4 22.3 15.7 12 5.4 1.7 6.8 0.3 18.5 12z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="megamenu__submenu-child hidden">
                                            <ul className='w-[330px] megamenu__submenu-items grid grid-cols-2'>
                                                <li>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Desks</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Office Chairs</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Office Storage</span></a></li>
                                                        <li>
                                                            <a className='title-link active text-active' href="https://www.lafurniturestore.com/living-room.html"><span>ALL OFFICE</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="w-[570px]">
                                                <img className='w-full h-full' src="https://www.lafurniturestore.com/media/catalog/category/4-office.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="category-item megamenu__submenu">
                                    <div className="">
                                        <div className="">
                                            <a className="menu-thumb-link flex justify-between" href="#">
                                                OUTDOOR
                                                <span>
                                                    <svg

                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19"
                                                        height="19"
                                                        fill="#CFCFCF"
                                                        version="1.1"
                                                        viewBox="0 0 24 24"
                                                        xmlSpace="preserve"
                                                    >
                                                        <path stroke='4px' d="M6.8 23.7L5.4 22.3 15.7 12 5.4 1.7 6.8 0.3 18.5 12z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="megamenu__submenu-child hidden">
                                            <ul className='w-[330px] megamenu__submenu-items grid grid-cols-2'>
                                                <li>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Outdoor Seating and Lounge</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Outdoor Dining</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Outdoor Bar</span></a></li>
                                                        <li>
                                                            <a className='title-link active text-active' href="https://www.lafurniturestore.com/living-room.html"><span>ALL OUTDOOR</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="w-[570px]">
                                                <img className='w-full h-full' src="https://www.lafurniturestore.com/media/catalog/category/5-outdoor.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="category-item megamenu__submenu">
                                    <div className="">
                                        <div className="">
                                            <a className="menu-thumb-link flex justify-between" href="#">
                                                Home decor
                                                <span>
                                                    <svg

                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19"
                                                        height="19"
                                                        fill="#CFCFCF"
                                                        version="1.1"
                                                        viewBox="0 0 24 24"
                                                        xmlSpace="preserve"
                                                    >
                                                        <path stroke='4px' d="M6.8 23.7L5.4 22.3 15.7 12 5.4 1.7 6.8 0.3 18.5 12z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="megamenu__submenu-child hidden">
                                            <ul className='w-[330px] megamenu__submenu-items grid grid-cols-2'>
                                                <li>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Lighting</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Sculptures & Vases</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Paintings & Wall Art</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Mirrors</span></a></li>
                                                        <li>
                                                            <a className='title-link active text-active' href="https://www.lafurniturestore.com/living-room.html"><span>ALL HOME DÉCOR</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="w-[570px]">
                                                <img className='w-full h-full' src="https://www.lafurniturestore.com/media/catalog/category/6-home-dekor.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="category-item megamenu__submenu">
                                    <div className="">
                                        <div className="">
                                            <a className="menu-thumb-link flex justify-between" href="#">
                                                ACCENT FURNITURE
                                                <span>
                                                    <svg

                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19"
                                                        height="19"
                                                        fill="#CFCFCF"
                                                        version="1.1"
                                                        viewBox="0 0 24 24"
                                                        xmlSpace="preserve"
                                                    >
                                                        <path stroke='4px' d="M6.8 23.7L5.4 22.3 15.7 12 5.4 1.7 6.8 0.3 18.5 12z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="megamenu__submenu-child hidden">
                                            <ul className='w-[330px] megamenu__submenu-items grid grid-cols-1'>
                                                <li>
                                                    <ul className="sub-menu__childs">
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Console Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/modern-sofa.html"><span>Accent Tables</span></a></li>
                                                        <li><a href="https://www.lafurniturestore.com/living-room/sofa-sets.html"><span>Accent Chairs</span></a></li>
                                                        <li>
                                                            <a className='title-link active text-active' href="https://www.lafurniturestore.com/living-room.html"><span>ALL ACCENT FURNITURE</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="w-[570px]">
                                                <img className='w-full h-full' src="https://www.lafurniturestore.com/media/catalog/category/7-accent-furniture.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mr-[25px]">
                        <a href="https://www.lafurniturestore.com/specials/new-arrivals.html" className="nav-link"><span>Collections</span></a>
                    </li>
                    <li className="mr-[25px] group relative">
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
                    <li className="mr-[25px] group relative">
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
                    <li className="mr-[25px] group relative">
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
                    <li className="mr-[25px]">
                        <a href="https://www.lafurniturestore.com/specials/new-arrivals.html" className="text-[#f35643] nav-link"><span>Flash Sale</span></a>
                    </li>
                </ul>
                <div className="search-bar">
                    <div className=" page-header">
                        <div class="block block-search">
                            <div class="block block-title"><strong>Search</strong></div>
                            <div class="block block-content">
                                <form class="form minisearch" id="search_mini_form" action="https://www.lafurniturestore.com/catalogsearch/result/" method="get">
                                    <div class="field search">
                                        <div class="control">
                                            <input id="search" autocomplete="off" placeholder="Search" name="q" value="" />
                                            <div class="actions">
                                                <button type="submit" title="Search" class="action search">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="21"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            stroke="#000"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15.796 15.811L21 21m-3-10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>

        </header>
    )
}
