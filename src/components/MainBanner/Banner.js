import React from 'react';
import logo from '../../assets/logo.png';

const Banner = () =>
<div id="banner">
	<img src={logo} alt="logo"/>
	<h1>jon berkowitz</h1>
	<h2>FULL-STACK DEVELOPER / GRAPHIC DESIGNER</h2>
	<div id="work-link">
	<a href="#">MY WORK</a><a id="link-arrow" href="#">v</a>
	</div>
</div>

export default Banner