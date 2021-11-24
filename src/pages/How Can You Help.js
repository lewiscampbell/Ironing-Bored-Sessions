import React from 'react';

import Layout from '../components/Layout';
import certificate1 from '../assets/images/certificate1.jpg';
import building from '../assets/images/building.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h1>How Can You Help?</h1>
      </header>
      <section className="wrapper style5">
    	<div className="inner">

			<h2>How Can You Help?</h2>

			<p>Sponsor a child and become a mentor to a child or young adult in the community and you will receive photos and letters from the child or teacher.</p>

			<div className="table-wrapper">
							<table>
								<tbody>
									<tr>
										<td>Sponser a Child for a Year (Primary School)</td>
										<td>Fees, uniform, equipment, food</td>
										<td>£50.00</td>
									</tr>
									<tr>
										<td>Sponser a Child for a Year (Secondary School)</td>
										<td>Fees, uniform, equipment, food</td>
										<td>£100.00</td>
									</tr>
									<tr>
										<td>Employ a Teacher for a Year</td>
										<td>Primary School</td>
										<td>£1000.00</td>
									</tr>
									<tr>
										<td>Employ a Teacher for a Year</td>
										<td>Secondary School</td>
										<td>£1800.00</td>
									</tr>
								</tbody>
							</table>

					<br/>

					<div><span className="image fit"><img src={certificate1} alt="" /></span></div>

					<br/>

					<h3>Vital Supplies</h3>

						<table>
								<tbody>
									<tr>
										<td>Paper and pencils for the children</td>
										<td> </td>
										<td>£20.00</td>
									</tr>
									<tr>
										<td>Textbooks for each school year</td>
										<td> </td>
										<td>£400.00</td>
									</tr>
									<tr>
										<td>Textbooks for all 8 primary year groups</td>
										<td> </td>
										<td>£3200.00</td>
									</tr>
									<tr>
										<td>Textbooks for secondary year students</td>
										<td>Secondary School</td>
										<td>£600.00</td>
									</tr>
									<tr>
										<td>Buy a laptop or phone for the children to access the internet</td>
										<td>Secondary School</td>
										<td>£100.00</td>
									</tr>
								</tbody>
							</table>



							<br/>

								<p>You can also donate any working, unlocked mobile phones to give a child access to resources on the internet.</p>

							<br/>


							<h3>Infrastructure</h3>
					
					<table>
							<tbody>
								<tr>
									<td>Install Solar power for one classroom</td>
									<td> </td>
									<td>£1000.00</td>
								</tr>
								<tr>
									<td>Install reliable Internet connection</td>
									<td> </td>
									<td>£500.00</td>
								</tr>
								<tr>
									<td>Annual maintenance of the solar power and internet</td>
									<td> </td>
									<td>£100.00</td>
								</tr>
								<tr>
									<td>Build a new classroom</td>
									<td> </td>
									<td>£4000.00</td>
								</tr>
								<tr>
									<td>Build teacher accommodation to encourage good applicants</td>
									<td> </td>
									<td>£4000.00</td>
								</tr>
							</tbody>
						</table>

						<br/>

						<div><span className="image fit"><img src={building} alt="" /></span></div>

						<br/>

						<p>We will apply for a charity number from the Charity Commission as soon as possible. Donations will then be augmented by 25% with Gift Aid. When this is set up, Don’t forget to claim back tax on your donations, the difference between the tax you’ve paid on the donation and what the charity got back, which could be 15 or 20% of your donation.</p>

			</div>
        </div>
      </section>

    </article>
  </Layout>
);

export default IndexPage;
