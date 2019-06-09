import React from 'react';
import logo from '../../assets/logo.png';

const Banner = () =>
<div id="banner">
	<img src={logo} alt="logo"/>
	<h1>jon berkowitz</h1>
	<h2>FULL-STACK DEVELOPER <br class="break"/>/ GRAPHIC DESIGNER</h2>
	<div id="work-link">
	<a href="#first-project">MY WORK</a><a id="link-arrow" href="#first-project">v</a>
	</div>
</div>

export default Banner