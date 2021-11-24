import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import certificate2 from '../assets/images/certificate2.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h1>{config.heading}</h1>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>
    
    {/*

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Arcu aliquet vel lobortis ata nisl
            <br />
            eget augue amet aliquet nisl cep donec
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    */}


    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Our Mission</h2>
          <p>
            We aim to give children the aspiration and opportunity through education, especially girls, 
            <br />
            in Malawi and Uganda, to become community leaders and role models who will improve
            <br />
            themselves and their communities.
          </p>
        </header>


        <ul className="features">
          <li>
            <h3>Sponser a Child</h3>
            <p>
            One extra year of school increases earnings by up to 10%: this can be double for women.
            </p>
          </li>
          <li>
            <h3>Sponser a Teacher</h3>
            <p>
            One more year of education decreases, by at least 10%, the probability of a girl giving birth when she is still a teenager. - (World Bank) 
            </p>
          </li>
        </ul>

        <br/>

            <blockquote>'There are so many children who are not attending school, however, currently 48 children who are in dire needs have been identified from the surrounding villages. If these children get support, I am very certain that their future will be brighter’. - Head Teacher</blockquote>

        <br/>

            <div><span className="image fit"><img src={certificate2} alt="" /></span></div>

        <br/>

        <div className="table-wrapper">
          <h2>How Can You Help?</h2>
						<table>
							<thead>
								<tr>
									<th>Help</th>
									<th>Description</th>
									<th>Cost</th>
								</tr>
							</thead>
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
									<td>Sponsor a Teacher for a Year</td>
									<td>Primary School</td>
									<td>£1000.00</td>
								</tr>
								<tr>
									<td>Sponsor a Teacher for a Year</td>
									<td>Secondary School</td>
									<td>£1800.00</td>
								</tr>
							</tbody>
						</table>

            <br/>

            <a href="/Donate" className="button fit">
              Learn More Here >
            </a>

					</div>

      </div>


    </section>


    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Donate Here</h2>
          <a href="/Donate" className="button fit primary">
              Donate!
            </a>
        </header>
      </div>
    </section>



  </Layout>
);

export default IndexPage;
