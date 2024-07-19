import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function EmailResetPassword(){
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
                            <h2 style={{fontWeight:'600', fontSize:'24px'}}>Reset Password</h2>
                        </td>
                    </tr>

                    <tr>
                        <td style={{padding: '16px 16px 0', color: '#161c2d'}}>
                            <p style={{margin: '0', fontSize: '18px', fontWeight: '500'}}>Hello, Harry!</p>
                            <p style={{marginBottom: '0', color: '#94a3b8'}}>To reset your password, please click the button below :</p>
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '16px 16px 0'}}>
                            <Link href="#" style={{padding: '8px 20px', outline: 'none', textDecoration: 'none', fontSize: '15px', display: 'inline-block', letterSpacing: '0.5px', transition: 'all 0.3s', fontWeight: '500', borderRadius: '6px', backgroundColor:' #f97316', border:' 1px solid #f97316', color: '#ffffff'}}>Reset Password</Link>
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '16px 16px 0', color: '#94a3b8', lineHeight:'24px'}}>
                            This link will be active for 45 second from the time this email was sent. If you did not request to reset your password, please ignore this email and your account will not be affected.
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '16px'}}>
                            <p style={{margin: '0', fontSize: '18px', fontWeight: '500'}}>Cartzio <br/> Support Team</p>
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