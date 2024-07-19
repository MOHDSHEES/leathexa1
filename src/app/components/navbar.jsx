'use client'
import React, { useState, useEffect, useRef  } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {FiSearch, FiShoppingCart, FiHeart, FiDollarSign, FiUser, FiHelpCircle, FiSettings, FiLogOut} from '../assets/icons/vander'

export default function Navbar({navClass, navlight}){
    let [scrolling, setScrolling] = useState(false);
    let [isToggle, setToggle] = useState(false);
    let [manu , setManu] = useState('');
    let [subManu , setSubManu] = useState('');
    let [isOpen, setIsOpen] = useState(false);
    let [cartManu, setCartManu] = useState(false);
    let [userManu, setUserManu] = useState(false);
    let dropdownRef = useRef(null);
    let cartRef = useRef(null);
    let userRef = useRef(null)
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setIsOpen(false);
            }
          };
        const cartOutsideClick = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setCartManu(false);
            }
        };
        const userOutsideClick = (e) =>{
            if(userRef.current && !userRef.current.contains(e.target)){
                setUserManu(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleOutsideClick);
        window.addEventListener('click', cartOutsideClick);
        window.addEventListener('click', userOutsideClick);
        
        let current = window.location.pathname
        setManu(current)
        setSubManu(current)
        window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('click', cartOutsideClick);
      window.removeEventListener('click', userOutsideClick);
    };
  }, []);

  const toggleMenu = () =>{
    setToggle(!isToggle)
  }

    return(
        <nav id="topnav" className={`${navClass} ${scrolling ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                {navlight === true ? (
                    <Link className="logo" href="/">
                    <span className="inline-block dark:hidden">
                        <Image src='/images/logo-dark.png' width={114} height={22} className="l-dark" alt=""/>
                        <Image src='/images/logo-light.png' width={114} height={22} className="l-light" alt=""/>
                    </span>
                    <Image src='/images/logo-light.png' width={114} height={22} className="hidden dark:inline-block" alt=""/>
                </Link>
                ) : (
                    <Link className="logo" href="/">
                        <div>
                            <Image src='/images/logo-dark.png' width={114} height={22} className="h-[22px] inline-block dark:hidden" alt=""/>
                            <Image src='/images/logo-white.png' width={114} height={22} className="h-[22px] hidden dark:inline-block" alt=""/>
                        </div>
                    </Link>
                )}
                

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href='#' className={`navbar-toggle ${isToggle ? 'open' : ''}`} id="isToggle" onClick={() =>toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-none mb-0">
                    <li className="dropdown inline-block relative pe-1" ref={dropdownRef}>
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle align-middle inline-flex search-dropdown" type="button" onClick={()=>setIsOpen(!isOpen)}>
                            {navlight === true ? (
                                 <>
                                 <FiSearch className="size-5 dark-icon"></FiSearch>
                                 <FiSearch className="size-5 white-icon text-white"></FiSearch>
                                 </>
                            ) : (
                                <FiSearch className="size-5"></FiSearch>
                            )}
                        </button>
                        {isOpen && (
                            <div className={`dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800`}>
                                <div className="relative">
                                    <FiSearch className="absolute size-4 top-[9px] end-3"></FiSearch>
                                    <input type="text" className="h-9 px-3 pe-10 w-full border-gray-100 dark:border-gray-800 focus:ring-0 outline-none bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..."/>
                                </div>
                            </div>
                        )}
                    </li>

                    <li className="dropdown inline-block relative ps-0.5" ref={cartRef}>
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 border border-orange-500 text-white" type="button" onClick={()=>setCartManu(!cartManu)}>
                            <FiShoppingCart className="h-4 w-4"></FiShoppingCart>
                        </button>
                        {cartManu && (
                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                                <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                                    <li className='ms-0'>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/trendy-shirt.jpg' width={36} height={46} className="rounded shadow dark:shadow-gray-800 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">T-shirt (M)</span>
                                                    <span className="block text-sm text-slate-400">$320 X 2</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$640</span>
                                        </Link>
                                    </li>

                                    <li className='ms-0'>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/luxurious-bag2.jpg' width={36} height={46} className="rounded shadow dark:shadow-gray-800 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Bag</span>
                                                    <span className="block text-sm text-slate-400">$50 X 5</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$250</span>
                                        </Link>
                                    </li>

                                    <li className='ms-0'>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/apple-smart-watch.jpg' width={36} height={46} className="rounded shadow dark:shadow-gray-800 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Watch (Men)</span>
                                                    <span className="block text-sm text-slate-400">$800 X 1</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$800</span>
                                        </Link>
                                    </li>

                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2 ms-0"></li>

                                    <li className="flex items-center justify-between py-1.5 px-4 ms-0">
                                        <h6 className="font-semibold mb-0">Total($):</h6>
                                        <h6 className="font-semibold mb-0">$1690</h6>
                                    </li>

                                    <li className="py-1.5 px-4 ms-0">
                                        <span className="text-center block">
                                            <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white me-1">View Cart</Link>
                                            <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white">Checkout</Link>
                                        </span>
                                        <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="inline-block ps-0.5">
                        <Link href="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 text-white">
                            <FiHeart data-feather="heart" className="h-4 w-4"></FiHeart>
                        </Link>
                    </li>
            
                    <li className="dropdown inline-block relative ps-0.5" ref={userRef}>
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle items-center" type="button" onClick={()=>setUserManu(!userManu)}>
                            <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-orange-500 bg-orange-500 text-white"><Image src='/images/client/16.jpg' width={34} height={34} className="rounded-full" alt=""/></span>
                        </button>
                        {userManu && (
                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
                                <ul className="py-2 text-start">
                                    <li className='ms-0'>
                                        <p className="text-slate-400 pt-2 px-4">Welcome Jesus!</p>
                                    </li>
                                    <li className='ms-0'>
                                        <p className="flex items-center font-medium py-2 px-4"><FiDollarSign className="h-4 w-4 me-2"></FiDollarSign> Balance: <span className="text-orange-500 ms-2">$ 245.10</span></p>
                                    </li>
                                    <li className='ms-0'>
                                        <Link href="/user-account" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"><FiUser className="h-4 w-4 me-2"></FiUser>Account</Link>
                                    </li>
                                    <li className='ms-0'>
                                        <Link href="/helpcenter" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"><FiHelpCircle className="h-4 w-4 me-2"></FiHelpCircle>Helpcenter</Link>
                                    </li>
                                    <li className='ms-0'>
                                        <Link href="/user-setting" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"><FiSettings className="h-4 w-4 me-2"></FiSettings>Settings</Link>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                    <li className='ms-0'>
                                        <Link href="/login" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"><FiLogOut className="h-4 w-4 me-2"></FiLogOut>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>

                <div id="navigation" style={{display: isToggle === true ? 'block' : 'none'}}>
                    <ul className={`navigation-menu ${navlight === true ? 'nav-light' : ''}`}>
                        <li className={`has-submenu parent-menu-item ${['/', '/index-fashion-two', '/index-fashion-three','/index-fashion-four','/index-item'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setSubManu(setManu === '/index-item' ? '' : '/index-item' )}>Hero</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/', '/index-fashion-two', '/index-fashion-three','/index-fashion-four','/index-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`ms-0 ${manu === '/' ? 'active' : ''}`}><Link href="/" className="sub-menu-item">Fashion One</Link></li>
                                <li className={`ms-0 ${manu === '/index-fashion-two' ? 'active' : ''}`}><Link href="/index-fashion-two" className="sub-menu-item">Fashion Two</Link></li>
                                <li className={`ms-0 ${manu === '/index-fashion-three' ? 'active' : ''}`}><Link href="/index-fashion-three" className="sub-menu-item">Fashion Three</Link></li>
                                <li className={`ms-0 ${manu === '/index-fashion-four' ? 'active' : ''}`}><Link href="/index-fashion-four" className="sub-menu-item">Fashion Four</Link></li>
                            </ul>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item ${['/product-item'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setSubManu(setManu === '/product-item' ? '' : '/product-item' )}>Products</Link><span className="menu-arrow"></span>

                            <ul className={`submenu megamenu ${['/product-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className='ms-0'>
                                    <ul>
                                        <li className="megamenu-head ms-0">Product Features</li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Bundle - Upsell</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Hot Stock</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Sticky Add To Cart</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Notify Me (Out Of Stock)</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Ask An Expert</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Variant Image Grouped</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Wishlist</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Trust Badge</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Delivery Information</Link></li>
                                    </ul>
                                </li>

                                <li className='ms-0'>
                                    <ul>
                                        <li className="megamenu-head ms-0">Product Features</li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Sold In Last</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Color Comparison</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Product Swatches</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Product Select Options</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Pre-Order</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Product 3D, AR Models</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Terms And Conditions Checkbox</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Variant Metafield Description</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Variant Metafield Property</Link></li>
                                    </ul>
                                </li>

                                <li className='ms-0'>
                                    <ul>
                                        <li className="megamenu-head ms-0">Product Features</li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Product Video</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Size Chart</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Dynamic Checkout</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Product Countdown</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Custom Content</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Custom Options</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Product Combo</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Product Complementary</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Auto Discount</Link></li>
                                    </ul>
                                </li>
                        
                                <li className='ms-0'>
                                    <ul>
                                        <li className="megamenu-head ms-0">Product Features</li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Custom Product Tabs</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Vertical Product Tab</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Horizontal Product Tab</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Social Share</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Related Products</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Recently Viewed Products</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Custom Label</Link></li>
                                        <li className='ms-0'><Link href="#!" className="sub-menu-item">Local Pick Up</Link></li>
                                    </ul>
                                </li>
                        
                                <li className='ms-0'>
                                    <ul>
                                        <li className="megamenu-head"><Image src='/images/cta.png' width={0} height={0} sizes='100vw' style={{width:'100%' , height:'auto'}} alt=""/></li>

                                        <li className="text-center"><Link href="#!" className="py-2 px-5 inline-block font-medium tracking-wide align-middle duration-500 text-base text-center bg-orange-500/10 text-orange-500 rounded-md me-2 mt-2"><i className="mdi mdi-cart-outline"></i> Shop Now</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item ${['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar','/shop-list','/shop-list-left-sidebar','/shop-list-right-sidebar','/product-detail-one','/product-detail-two','/product-detail-three','/shop-cart','/shop-checkout','/our-store','/brands','/compare-product','/recently-viewed-product','/shop-item','/list-item','/detail-item','/grid-item'].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={()=>setSubManu(subManu=== '/shop-item' ? '' : '/shop-item')}> Shop </Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/shop-grid', '/shop-grid-left-sidebar', '/shop-grid-right-sidebar','/shop-list','/shop-list-left-sidebar','/shop-list-right-sidebar','/product-detail-one','/product-detail-two','/product-detail-three','/shop-cart','/shop-checkout','/our-store','/brands','/compare-product','/recently-viewed-product','/shop-item','/list-item','/detail-item','/grid-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`has-submenu parent-menu-item ms-0 ${['/shop-grid','/shop-grid-left-sidebar','/shop-grid-right-sidebar','/grid-item'].includes(manu) ? 'active' : ''}`}>
                                    <Link href="#" onClick={()=>setSubManu(setManu === '/grid-item' ? '' : '/grid-item' )}> Shop Grid </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/shop-grid','/shop-grid-left-sidebar','/shop-grid-right-sidebar','/grid-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`ms-0 ${manu === '/shop-grid' ? 'active' : ''}`}><Link href="/shop-grid" className="sub-menu-item">Shop Grid</Link></li>
                                        <li className={`ms-0 ${manu === '/shop-grid-left-sidebar' ? 'active' : ''}`}><Link href="/shop-grid-left-sidebar" className="sub-menu-item">Grid Left Sidebar</Link></li>
                                        <li className={`ms-0 ${manu === '/shop-grid-right-sidebar' ? 'active' : ''}`}><Link href="/shop-grid-right-sidebar" className="sub-menu-item">Grid Right Sidebar</Link></li>
                                    </ul>  
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/shop-list','/shop-list-left-sidebar','/shop-list-right-sidebar','/list-item'].includes(manu) ? 'active' : ''}`}>
                                    <Link href="#" onClick={()=>setSubManu(setManu === '/list-item' ? '' : '/list-item' )}> Shop List </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/shop-list','/shop-list-left-sidebar','/shop-list-right-sidebar','/list-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`ms-0 ${manu === '/shop-list' ? 'active' : ''}`}><Link href="/shop-list" className="sub-menu-item">Shop List</Link></li>
                                        <li className={`ms-0 ${manu === '/shop-list-left-sidebar' ? 'active' : ''}`}><Link href="/shop-list-left-sidebar" className="sub-menu-item">List Left Sidebar</Link></li>
                                        <li className={`ms-0 ${manu === '/shop-list-right-sidebar' ? 'active' : ''}`}><Link href="/shop-list-right-sidebar" className="sub-menu-item">List Right Sidebar</Link></li>
                                    </ul>  
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/product-detail-one','/product-detail-two','/product-detail-three','/detail-item'].includes(manu) ? 'active' : ''}`}>
                                    <Link href="#" onClick={()=>setSubManu(setManu === '/detail-item' ? '' : '/detail-item' )}> Shop Detail </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/product-detail-one','/product-detail-two','/product-detail-three','/detail-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`ms-0 ${manu === '/product-detail-one' ? 'active' : ''}`}><Link href="/product-detail-one" className="sub-menu-item">Product Detail One</Link></li>
                                        <li className={`ms-0 ${manu === '/product-detail-two' ? 'active' : ''}`}><Link href="/product-detail-two" className="sub-menu-item">Product Detail Two</Link></li>
                                        <li className={`ms-0 ${manu === '/product-detail-three' ? 'active' : ''}`}><Link href="/product-detail-three" className="sub-menu-item">Product Detail Three</Link></li>
                                    </ul>  
                                </li>
                                <li className={`ms-0 ${manu === '/shop-cart' ? 'active' : ''}`}><Link href="/shop-cart" className="sub-menu-item">Shop Cart</Link></li>
                                <li className={`ms-0 ${manu === '/shop-checkout' ? 'active' : ''}`}><Link href="/shop-checkout" className="sub-menu-item">Checkout</Link></li>
                                <li className={`ms-0 ${manu === '/our-store' ? 'active' : ''}`}><Link href="/our-store" className="sub-menu-item">Our Store</Link></li>
                                <li className={`ms-0 ${manu === '/brands' ? 'active' : ''}`}><Link href="/brands" className="sub-menu-item">Brands</Link></li>
                                <li className={`ms-0 ${manu === '/compare-product' ? 'active' : ''}`}><Link href="/compare-product" className="sub-menu-item">Compare Product</Link></li>
                                <li className={`ms-0 ${manu === '/recently-viewed-product' ? 'active' : ''}`}><Link href="/recently-viewed-product" className="sub-menu-item">Recently Viewed Products</Link></li>
                            </ul>
                        </li>
                
                        <li className={`has-submenu parent-parent-menu-item ${['/aboutus','/user-account','/user-billing','/user-payment','/user-invoice','/user-social','/user-notification','/user-setting','/page-item','/user-item','/email-item','/email-confirmation','/email-cart','/email-offers','/email-order-success','/email-gift-voucher','/email-reset-password','/email-item-review','/blog-item','/blogs','/blog-detail','/help-item','/helpcenter','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support','/auth-item','/login','/signup','/forgot-password','/lock-screen','/utility-item','/terms','/privacy','/comingsoon','/maintenance','/error','/special-item','/multi-item','/multi-item2','/multi-item3','/career'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>setSubManu(setManu === '/page-item' ? '' : '/page-item' )}>Pages</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/aboutus','/user-account','/user-billing','/user-payment','/user-invoice','/user-social','/user-notification','/user-setting','/page-item','/user-item','/email-item','/email-confirmation','/email-cart','/email-offers','/email-order-success','/email-gift-voucher','/email-reset-password','/email-item-review','/blog-item','/blogs','/blog-detail','/help-item','/helpcenter','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support','/auth-item','/login','/signup','/forgot-password','/lock-screen','/utility-item','/terms','/privacy','/comingsoon','/maintenance','/error','/special-item','/multi-item','/multi-item2','/multi-item3','/career'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`ms-0 ${manu === '/aboutus' ? 'active' : ''}`}><Link href="/aboutus" className="sub-menu-item">About Us</Link></li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/user-account','/user-billing','/user-payment','/user-invoice','/user-social','/user-notification','/user-setting','/user-item',].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={()=>setSubManu(setManu === '/user-item' ? '' : '/user-item' )}> My Account</Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/user-account','/user-billing','/user-payment','/user-invoice','/user-social','/user-notification','/user-setting','/user-item',].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`ms-0 ${manu === '/user-account' ? 'active' : ''}`}><Link href="/user-account" className="sub-menu-item">User Account</Link></li>
                                        <li className={`ms-0 ${manu === '/user-billing' ? 'active' : ''}`}><Link href="/user-billing" className="sub-menu-item">Billing</Link></li>
                                        <li className={`ms-0 ${manu === '/user-payment' ? 'active' : ''}`}><Link href="/user-payment" className="sub-menu-item">Payment</Link></li>
                                        <li className={`ms-0 ${manu === '/user-invoice' ? 'active' : ''}`}><Link href="/user-invoice" className="sub-menu-item">Invoice</Link></li>
                                        <li className={`ms-0 ${manu === '/user-social' ? 'active' : ''}`}><Link href="/user-social" className="sub-menu-item">Social</Link></li>
                                        <li className={`ms-0 ${manu === '/user-notification' ? 'active' : ''}`}><Link href="/user-notification" className="sub-menu-item">Notification</Link></li>
                                        <li className={`ms-0 ${manu === '/user-setting' ? 'active' : ''}`}><Link href="/user-setting" className="sub-menu-item">Setting</Link></li>
                                    </ul> 
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/email-confirmation','/email-cart','/email-offers','/email-order-success','/email-gift-voucher','/email-reset-password','/email-item-review','/email-item',].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={()=>setSubManu(setManu === '/email-item' ? '' : '/email-item' )}> Email Template </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/email-confirmation','/email-cart','/email-offers','/email-order-success','/email-gift-voucher','/email-reset-password','/email-item-review','/email-item',].includes(subManu) ? 'open' : ''}`}>
                                        <li className='ms-0'><Link href="/email-confirmation" className="sub-menu-item"> Confirmation</Link></li>
                                        <li className='ms-0'><Link href="/email-cart" className="sub-menu-item"> Cart</Link></li>
                                        <li className='ms-0'><Link href="/email-offers" className="sub-menu-item"> Offers</Link></li>
                                        <li className='ms-0'><Link href="/email-order-success" className="sub-menu-item"> Order Success</Link></li>
                                        <li className='ms-0'><Link href="/email-gift-voucher" className="sub-menu-item"> Gift Voucher</Link></li>
                                        <li className='ms-0'><Link href="/email-reset-password" className="sub-menu-item"> Reset Password</Link></li>
                                        <li className='ms-0'><Link href="/email-item-review" className="sub-menu-item"> Item Review</Link></li>
                                    </ul> 
                                </li>
                        
                                <li className={`has-submenu parent-menu-item ms-0 ${['/blogs','/blog-detail','/blog-item'].includes(manu) ? 'active' : '' }`}><Link href="#" onClick={()=>setSubManu(setManu === '/blog-item' ? '' : '/blog-item' )}> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/blogs','/blog-detail','/blog-item'].includes(subManu) ? 'open' : '' }`}>
                                        <li className={`ms-0 ${manu === '/blogs' ? 'active' : ''}`}><Link href="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li className={`ms-0 ${manu === '/blog-detail' ? 'active' : ''}`}><Link href="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>

                                <li className={`ms-0 ${manu === '/career' ? 'active' : ''}`}><Link href="/career" className="sub-menu-item">Career </Link></li>
                        
                                <li className={`has-submenu parent-menu-item ms-0 ${['/helpcenter','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support','/help-item'].includes(manu) ? 'active' : '' }`}>
                                    <Link href="#" onClick={()=>setSubManu(setManu === '/help-item' ? '' : '/help-item' )}> Helpcenter </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/helpcenter','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support','/help-item'].includes(subManu) ? 'open' : '' }`}>
                                        <li className={`ms-0 ${manu === '/helpcenter' ? 'active' : ''}`}><Link href="/helpcenter" className="sub-menu-item">Overview</Link></li>
                                        <li className={`ms-0 ${manu === '/helpcenter-faqs' ? 'active' : ''}`}><Link href="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                        <li className={`ms-0 ${manu === '/helpcenter-guides' ? 'active' : ''}`}><Link href="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                        <li className={`ms-0 ${manu === '/helpcenter-support' ? 'active' : ''}`}><Link href="/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                    </ul>  
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/login','/signup','/forgot-password','/lock-screen','/auth-item'].includes(manu) ? 'active' : '' }`}><Link href="#" onClick={()=>setSubManu(setManu === '/auth-item' ? '' : '/auth-item' )}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/login','/signup','/forgot-password','/lock-screen','/auth-item'].includes(subManu) ? 'open' : '' }`}>
                                        <li className='ms-0'><Link href="/login" className="sub-menu-item"> Login</Link></li>
                                        <li className='ms-0'><Link href="/signup" className="sub-menu-item"> Signup</Link></li>
                                        <li className='ms-0'><Link href="/forgot-password" className="sub-menu-item"> Forgot Password</Link></li>
                                        <li className='ms-0'><Link href="/lock-screen" className="sub-menu-item"> Lock Screen</Link></li>
                                    </ul> 
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/terms','/privacy','/utility-item'].includes(manu) ? 'active' : '' }`}><Link href="#" onClick={()=>setSubManu(setManu === '/utility-item' ? '' : '/utility-item' )}> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/terms','/privacy','/utility-item'].includes(subManu) ? 'open' : '' }`}>
                                        <li className={`ms-0 ${manu === '/terms' ? 'active' : ''}`}><Link href="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li className={`ms-0 ${manu === '/privacy' ? 'active' : ''}`}><Link href="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>  
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/comingsoon','/maintenance','/error', '/special-item'].includes(manu) ? 'active' : '' }`}><Link href="#" onClick={()=>setSubManu(setManu === '/special-item' ? '' : '/special-item' )}> Special </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/comingsoon','/maintenance','/error', '/special-item'].includes(subManu) ? 'open' : '' }`}>
                                        <li className='ms-0'><Link href="/comingsoon" className="sub-menu-item"> Coming Soon</Link></li>
                                        <li className='ms-0'><Link href="/maintenance" className="sub-menu-item"> Maintenance</Link></li>
                                        <li className='ms-0'><Link href="/error" className="sub-menu-item"> 404!</Link></li>
                                    </ul> 
                                </li>

                                <li className={`has-submenu parent-menu-item ms-0 ${['/multi-item','/multi-item2','/multi-item3'].includes(manu) ? 'active' : '' }`}><Link href="#" onClick={()=>setSubManu(setManu === '/multi-item' ? '' : '/multi-item' )}> Multi Level Menu</Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/multi-item', '/multi-item2','/multi-item3'].includes(subManu) ? 'open' : '' }`}>
                                        <li className='ms-0'><Link href="#" onClick={()=>setSubManu(setManu === '/multi-item2' ? '' : '/multi-item2' )}className="sub-menu-item">Level 1.0</Link></li>
                                        <li className={`has-submenu child-menu-item ms-0 ${['/multi-item3'].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={()=>setSubManu(setManu === '/multi-item3' ? '' : '/multi-item3' )}> Level 2.0 </Link><span className="submenu-arrow"></span>
                                            <ul className={`submenu ${['/multi-item3'].includes(subManu) ? 'open' : '' }`}>
                                                <li className='ms-0'><Link href="#" className="sub-menu-item">Level 2.1</Link></li>
                                                <li className='ms-0'><Link href="#" className="sub-menu-item">Level 2.2</Link></li>
                                            </ul>  
                                        </li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
                
                        <li className={`${manu === '/sale' ? 'active' : ''}`}><Link href="/sale" className="sub-menu-item">Sale</Link></li>

                        <li className={`${manu === '/contact' ? 'active' : ''}`}><Link href="/contact" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}