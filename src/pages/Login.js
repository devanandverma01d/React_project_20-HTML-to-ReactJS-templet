import React from 'react'

export default function Login() {
  return (
    <>
        <div id="loading-overlay" />
        <div id="loading">
            <span>Loading...</span>
        </div>
        <section id="toolbar">
            <div className="container_12">
            {/* Left side */}
            <div className="left">
                <ul className="breadcrumb">
                <li><a href="#">Mango</a></li>
                <li><a href="#">Login</a></li>
                </ul>
            </div>
            {/* End of .left */}
            {/* Right side */}
            <div className="right">
                <ul>
                <li><a href="dashboard.html"><span className="icon i14_bended-arrow-left" />Back to Dashboard</a></li>
                <li className="red"><a href="#">Purchase</a></li>
                </ul>
            </div>{/* End of .right */}
            {/* Phone only items */}
            <div className="phone">
                {/* User Link */}
                <li><a href="#"><span className="icon icon-home" /></a></li>
                {/* Navigation */}
                <li><a href="#"><span className="icon icon-heart" /></a></li>
            </div>{/* End of .phone */}
            </div>{/* End of .container_12 */}
        </section>{/* End of #toolbar */}
        {/* The header containing the logo */}
        <header className="container_12">
            <div className="container">
            {/* Your logos */}
            <a href="/tf-mango/"><img src="img/logo-light.png" alt="Mango" width={210} height={67} /></a>
            <a className="phone-title" href="login.html"><img src="img/logo-mobile.png" alt="Mango" height={22} width={70} /></a>
            {/* Right link */}
            <div className="right">
                <span>Got no account?</span>
                <a href="#">Register</a>
            </div>
            </div>{/* End of .container */}
        </header>{/* End of header */}
        {/* The container of the sidebar and content box */}
        <section id="login" className="container_12 clearfix">
            <form action="dashboard.html" method="post" className="box validate">
            <div className="header">
                <h2><span className="icon icon-lock" />Login</h2>
            </div>
            <div className="content">
                {/* Login messages */}
                <div className="login-messages">
                <div className="message welcome">Welcome back!</div>
                <div className="message failure">Invalid credentials.</div>
                </div>
                {/* The form */}
                <div className="form-box">
                <div className="row">
                    <label htmlFor="login_name">
                    <strong>Username</strong>
                    <small>Or email address</small>
                    </label>
                    <div>
                    <input tabIndex={1} type="text" className="required" name="login_name" id="login_name" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="login_pw">
                    <strong>Password</strong>
                    <small><a href="#" id="true">Forgot it?</a></small>
                    </label>
                    <div>
                    <input tabIndex={2} type="password" className="required" name="login_pw" id="login_pw" />
                    </div>
                </div>
                </div>{/* End of .form-box */}
            </div>{/* End of .content */}
            <div className="actions">
                <div className="left">
                <div className="rememberme">
                    <input tabIndex={4} type="checkbox" name="login_remember" id="login_remember" defaultChecked /><label htmlFor="login_remember">Remember me?</label>
                </div>
                </div>
                <div className="right">
                <input tabIndex={3} type="submit" defaultValue="Sign In" name="login_btn" />
                </div>
            </div>{/* End of .actions */}
            </form>{/* End of form */}
        </section>


    </>
  )
}
