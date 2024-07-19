import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MailCart(){
    return(
        <>
        <div style={{margin: "24px auto"}}>
            <table cellpadding="0" cellspacing="0" style={{fontFamily: 'DM Sans, sans-serif' , fontSize: '16px', fontWeight: '400', width: '600px', border: 'none', margin: '0 auto', borderRadius: '6px', overflow: 'hidden', backgroundColor: '#fff', boxShadow:' 0 0 3px rgba(60, 72, 88, 0.15)'}}>

                <thead style={{padding: '16px', display: 'block'}}>
                    <tr style={{display: 'block', border: 'none', textAlign: 'center', fontSize: '24px',letterSpacing: '1px'}}>
                        <th scope="col" style={{margin: 'auto', display: 'block'}}><Link href="/" style={{display:'flex', justifyContent:'center'}}><Image src='/images/logo-icon-64.png' width={64} height={64} alt=""/></Link></th>
                    </tr>
                </thead>
    
                <tbody>
                    <tr>
                        <td style={{backgroundColor: '#f8fafc', padding: '32px', display: 'block', textAlign: 'center'}}>
                            <h2 style={{fontWeight:'600', fontSize:'24px'}}>Cartzio Shopcart</h2>
                        </td>
                    </tr>

                    <tr>
                        <td style={{padding: '16px 16px 0', color: '#161c2d'}}>
                            <p style={{margin: '0', fontSize: '18px', fontWeight: '500'}}>Hello, Harry!</p>
                            <p style={{marginBottom: '0', color: '#94a3b8'}}>Please check your bag and click on checkout button for payments.</p>
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '16px'}}>
                            <table style={{width: '100%', boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)', borderRadius: '6px', backgroundColor: '#fff'}}>
                                <thead style={{textTransform: 'uppercase', backgroundColor: '#f8fafc'}}>
                                    <tr>
                                        <th scope="col" style={{textAlign: 'left', padding: '10px 16px', border: 'none'}}>Product</th>
                                        <th scope="col" style={{padding: '10px 16px', border: 'none'}}>Price</th>
                                        <th scope="col" style={{padding: '10px 16px', border: 'none'}}>Qty</th>
                                        <th scope="col" style={{textAlign: 'right', padding: '10px 16px', border: 'none'}}>Total($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{padding: '16px'}}>
                                            <span style={{display: 'flex', alignItems: 'center',}}>
                                                <Image src='/images/shop/black-print-t-shirt.jpg' width={48} height={62} style={{width: '48px',boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)', borderRadius: '6px',}} alt=""/>
                                                <span style={{marginLeft: '8px'}}>
                                                    <span style={{fontWeight:'500'}}>T-shirt (M)</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td style={{textAlign: 'center', padding: '16px'}}>$ 280</td>
                                        <td style={{textAlign: 'center', padding: '16px'}}>1</td>
                                        <td style={{textAlign: 'right', padding: '16px'}}>$ 280</td>
                                    </tr>
    
                                    <tr>
                                        <td style={{padding: '16px'}}>
                                            <span style={{display: 'flex', alignItems: 'center',}}>
                                                <Image src='/images/shop/fashion-shoes-sneaker.jpg' width={48} height={62} style={{width: '48px',boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)', borderRadius: '6px',}} alt=""/>
                                                <span style={{marginLeft: '8px'}}>
                                                    <span style={{fontWeight: '500'}}>Sneaker Shoes</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td style={{textAlign: 'center', padding: '16px'}}>$ 160</td>
                                        <td style={{textAlign: 'center', padding: '16px'}}>1</td>
                                        <td style={{textAlign: 'right', padding: '16px'}}>$ 160</td>
                                    </tr>
    
                                    <tr>
                                        <td style={{padding: '16px'}}>
                                            <span style={{display: 'flex', alignItems: 'center',}}>
                                                <Image src='/images/shop/ladies-skirt-pair.jpg' width={48} height={62} style={{width: '48px',boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)', borderRadius: '6px',}} alt=""/>
                                                <span style={{marginLeft: '8px'}}>
                                                    <span style={{fontWeight: '500'}}>Ladies Skirt</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td style={{textAlign: 'center', padding: '16px'}}>$ 500</td>
                                        <td style={{textAlign: 'center', padding: '16px'}}>1</td>
                                        <td style={{textAlign: 'right', padding: '16px'}}>$ 500</td>
                                    </tr>

                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style={{padding: '16px'}}>
                            <table style={{width: '240px', boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)', borderRadius: '6px', marginLeft: 'auto'}}>
                                <tbody>
                                    <tr>
                                        <td style={{textAlign: 'right', padding: '16px'}}>
                                            <table style={{width: '100%'}}>
                                                <tr style={{listStyle: 'none', padding: 0, margin: '0'}}>
                                                    <td style={{display: 'flex', justifyContent: 'space-between', padding: '0 0 10px'}}>
                                                        <span style={{fontWeight: '500'}}>Subtotal :</span>
                                                        <span style={{color: '#94a3b8'}}>$ 940</span>
                                                    </td>
                                                    <td style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderTop: '1px solid #f3f4f6'}}>
                                                        <span style={{fontWeight: '500'}}>Taxes :</span>
                                                        <span style={{color: '#94a3b8'}}>$ 94</span>
                                                    </td>
                                                    <td style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0 0', borderTop: '1px solid #f3f4f6',}}>
                                                        <span style={{fontWeight: '600'}}>Total :</span>
                                                        <span style={{fontWeight: '600'}}>$ 1034</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr style={{textAlign: 'right'}}>
                        <td style={{padding: '16px'}}>
                            <Link href="#" style={{padding:'8px 20px', outline: 'none', textDecoration: 'none', fontSize: '15px', display: 'inline-block', letterSpacing: '0.5px', transition: 'all 0.3s', fontWeight: '500', borderRadius: '6px', backgroundColor: '#f97316', border:' 1px solid #f97316', color: '#fff'}}>Checkout</Link>
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