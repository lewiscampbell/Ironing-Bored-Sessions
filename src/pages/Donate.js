import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import banner from '../assets/images/banner.jpg';
const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h1>Donate</h1>
			<p>Help us, help them, help themselves</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">

				<section>

					<hr />
					<h2>Bank Details</h2>
					<p>Account Number: 1234</p>
					<p>Sort code: 123 456 789</p>
					<hr />
					<h2>Contact Details</h2>
					<p>Stephanie Matthews: example@gmail.com</p>
					<p>Stephanie Matthews: example@gmail.com</p>
					<p>Stephanie Matthews: example@gmail.com</p>
					<hr />
					
				</section>


			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
