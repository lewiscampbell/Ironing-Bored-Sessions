import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import logo from '../assets/images/IBSessions_logo.png';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <img class='logo' src={logo} alt="logo" />
        <br/>
        <br/>
        <p>Born out of the boredom of lockdown, Ironing Bored Sessions is a platform for DJ’s to share their mixes with the world.</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="three">
              <a href="/#" className="button primary">
                See Mixes
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>


    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Latest Mix</h2>
        </header>

        <div className="box alt">
						<div className="row gtr-50 gtr-uniform">
            <iframe 
                className="col-12"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/TsdAereKcHA"
								frameborder="0">
							</iframe>
						</div>
					</div>

          <br />
          <br />

        <header className="major">
          <h2>Other Mixes</h2>
        </header>

        <section>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<iframe 
                className="col-4"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/eVAxrwm56FY"
								frameborder="0">
							</iframe>
							<iframe 
                className="col-4"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/arU-8hjHL0Y"
								frameborder="0">
							</iframe>
              <iframe 
                className="col-4"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/TvPUvqdYUj8"
								frameborder="0">
							</iframe>
              <iframe 
                className="col-4"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/pinEjyQXgOQ"
								frameborder="0">
							</iframe>
							<iframe 
                className="col-4"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/HU30rQWh-V8"
								frameborder="0">
							</iframe>
              <iframe 
                className="col-4"
								id="player"
								type="text/html"
								src="https://www.youtube.com/embed/6ly3QRfGUZM"
								frameborder="0">
							</iframe>
						</div>
					</div>
				</section>

<br />

<a href='https://www.youtube.com/channel/UCaEvm31WsrxlLUOvnss1wZA' target="_blank" className="button">See all mixes on Youtube</a>

      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Do you mix?</h2>
          <p>
            Want to feature on Ironing Bored Sessions? 
            <br/>
            Send us a mix.
          </p>
          <a href="mailto:ironingboredsessions@gmail.com" className="button fit primary">
              Email
            </a>
        </header>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
