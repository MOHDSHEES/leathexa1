import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MailOffers(){
    return(
        <>
       <div style={{margin:' 24px auto'}}>
            <table cellpadding="0" cellspacing="0" style={{fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: '400', width: '600px', border: 'none', margin: '0 auto', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#fff', boxShadow:' 0 0 3px rgba(60, 72, 88, 0.15)'}}>
                <thead style={{padding: '16px', display: 'block',}}>
                    <tr style={{display: 'block', border: 'none', textAlign: 'center', fontSize: '24px', letterSpacing:'1px'}}>
                        <th scope="col" style={{margin:' auto', display: 'block'}}><Link href="/" style={{display:'flex', justifyContent:'center'}}><Image src='/images/logo-icon-64.png' width={64} height={64} alt=""/></Link></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td style={{justifyContent: 'center', textAlign: 'center', borderTop: '1px solid #f3f4f6'}}>
                            <Link href="/" style={{textDecoration: 'none', padding: '16px', display:'inline-block', fontWeight: '600', color:'#161c2d', textTransform:'uppercase',fontSize:'14px'}}>Home</Link>
                            <Link href="/shop-cart" style={{textDecoration:'none', padding:'16px', display:'inline-block', fontWeight:'600', color:'#161c2d', textTransform:'uppercase', fontSize:'14px'}}>Cart</Link>
                            <Link href="/sale" style={{textDecoration: 'none', padding: '16px', display:' inline-block', fontWeight: '600', color: '#161c2d', textTransform: 'uppercase', fontSize: '14px'}}>Sale</Link>
                            <Link href="/contact" style={{textDecoration: 'none', padding: '16px', display:' inline-block', fontWeight: '600', color: '#161c2d', textTransform: 'uppercase', fontSize: '14px'}}>Contact</Link>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style={{position: 'relative', color: '#161c2d', fontSize: '18px', padding: '70px 0', width: '600px', fontWeight: '600', background: `url('/images/hero/pages.jpg')`, textAlign: 'center',backgroundSize: 'cover'}}>
                            <span style={{position: 'absolute', inset: '0', backgroundColor: '#161c2d', opacity: '0.4'}}></span>
                            <span style={{position: 'relative', zIndex: '1'}}>
                                <h1 style={{color:' #fff', fontSize:'36px' , marginBottom:'30px'}}>SALE OUTLET <br/> UP TO 75% OFF</h1>

                                <Link href="#" style={{padding: '8px 20px', outline: 'none', textDecoration: 'none', fontSize: '14px', letterSpacing: '0.5px', transition:' all 0.3s', fontWeight: '500', borderRadius: '6px', backgroundColor: '#f97316', border:' 1px solid #f97316', color:' #fff'}}>Shop Now</Link>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td style={{padding: '16px 16px 0', color: '#161c2d'}}>
                            <p style={{margin: '0', fontSize: '18px', fontWeight: '500'}}>Hello, Harry!</p>
                            <p style={{marginBottom: '0', color: '#94a3b8'}}>Please check new offer from Cartzio for you.</p>
                        </td>
                    </tr>

                    <tr>
                        <td style={{padding: '16px'}}>
                            <span style={{fontWeight: 500, fontSize: '18px'}}>Blockbuster Deals</span>
                        </td>
                    </tr>

                    <tr>
                        <td style={{padding: '0 8px'}}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{padding: '0 8px 16px'}}>
                                            <Image src='/images/shop/apple-smart-watch.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto', borderRadius: '5px', boxShadow:' 0 0 3px rgba(60, 72, 88, 0.15)'}} alt=""/>
                                            <Link href="" style={{textDecoration: 'none', fontWeight: '500', display: 'block', margin: '10px 0 0', width: '100%', color: '#161c2d'}}>Smart Watch</Link>

                                            <Link href="#" style={{padding: '8px 20px', outline: 'none', display: 'inline-block', margin:' 10px 0 0', textDecoration: 'none', fontSize: '14px', letterSpacing: '0.5px', transition: 'all 0.3s', fontWeight: '500', borderRadius:' 6px', backgroundColor: '#161c2d', border: '1px solid #161c2d', color: '#fff'}}>Shop Now</Link>
                                        </td>

                                        <td style={{padding: '0 8px 16px'}}>
                                            <Image src='/images/shop/ladies-skirt-pair.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto',borderRadius: '5px', boxShadow:' 0 0 3px rgba(60, 72, 88, 0.15)'}} alt=""/>
                                            <Link href="" style={{textDecoration: 'none', fontWeight: '500', display: 'block', margin: '10px 0 0', width: '100%', color: '#161c2d'}}>Ladies Skirt</Link>

                                            <Link href="#" style={{padding: '8px 20px', outline: 'none', display: 'inline-block', margin:' 10px 0 0', textDecoration: 'none', fontSize: '14px', letterSpacing: '0.5px', transition: 'all 0.3s', fontWeight: '500', borderRadius:' 6px', backgroundColor: '#161c2d', border: '1px solid #161c2d', color: '#fff'}}>Shop Now</Link>
                                        </td>
                                        
                                        <td style={{padding: '0 8px 16px'}}>
                                            <Image src='/images/shop/luxurious-bag.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto',borderRadius: '5px', boxShadow:' 0 0 3px rgba(60, 72, 88, 0.15)'}} alt=""/>
                                            <Link href="" style={{textDecoration: 'none', fontWeight: '500', display: 'block', margin: '10px 0 0', width: '100%', color: '#161c2d'}}>Ladies Bag</Link>

                                            <Link href="#" style={{padding: '8px 20px', outline: 'none', display: 'inline-block', margin:' 10px 0 0', textDecoration: 'none', fontSize: '14px', letterSpacing: '0.5px', transition: 'all 0.3s', fontWeight: '500', borderRadius:' 6px', backgroundColor: '#161c2d', border: '1px solid #161c2d', color: '#fff'}}>Shop Now</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style={{padding: '16px 8px', 'color': '#fff', backgroundColor: '#161c2d', textAlign: 'center'}}>
                            <table style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <td style={{display: 'inline-flex', alignItems: 'center', margin: '0 10px 10px'}}>
                                            <span style={{fontSize: '14px'}}>Free delivery</span>
                                        </td>
                    
                                        <td style={{display: 'inline-flex', alignItems: 'center', margin: '0 10px 10px'}}>
                                            <span style={{fontSize: '14px'}}>Money-back quarantee</span>
                                        </td>
                    
                                        <td style={{display: 'inline-flex', alignItems: 'center', margin: '0 10px 10px'}}>
                                            <span style={{fontSize: '14px'}}>Secure payments</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{textAlign: 'center'}}>
                                            <p style={{margin: '4px 0 10px'}}>© {new Date().getFullYear()} Cartzio. Designed by <Link href="https://shreethemes.in/" target="_blank" style={{textDecoration: 'none', color: '#fff'}}>Shreethemes</Link>.</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{textAlign: 'center'}}>
                                            <Link href="" target="_blank" style={{color: '#ea580c'}}>Unsubscribe</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}