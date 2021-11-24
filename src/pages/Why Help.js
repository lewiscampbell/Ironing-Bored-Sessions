import React from 'react';

import Layout from '../components/Layout';
import classroom from '../assets/images/classroom.jpeg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h1>Why Help?</h1>
      </header>
      <section className="wrapper style5">
        <div className="inner">

        <h2>The Need in Malawi</h2>

							<ul>
								<li>12% children die before they are 5 years old. </li>
								<li>12% are orphans and children (under 16yrs) make up half of the population.</li>
								<li>The student to teacher ratio is 130:1.</li>
                <li>Only 35% children starting primary school (5-13 years) complete it due to cost and family pressure.</li>
                <li>Only 9% reach a minimum standard in English and Maths after primary school.</li>
                <li>Even the brightest children don’t go to secondary school due to lack of places, cost and safety. </li>
                <li>Girls are forced into early marriage.</li>
							</ul>

          <br/>

					<blockquote>‘When you educate a man, you educate an individual, but when you educate a girl you educate a society’.</blockquote>
					
          <br/>

        <h3>Who Will Benefit?</h3>

        <p>
          The first school to benefit will be to the students and community at The Chankhasi School, Nkhandwe Village, on the banks of Lake Malawi. This primary school has 384 children in 8 year groups in a community of ten villages (population 16,000). 95% of these people have no education and no reliable source of income. The basic wage, for those who can get work, is £1.50 a day. There is a huge drop out rate in pupil attendance, down from 50 in the first year to 8 in the last, due to cultural and economic reasons. Many are orphans and cannot afford food, school fees, and have commitments to their siblings.Despite passing the National exams at 13 years, very few children are offered places in secondary school and even they cannot continue due to the danger and expense of getting to the school, 27km away. The situation is particularly harsh on girls, who are expected to prioritise family over self and are often forced into early marriage.
        </p>

        <br/>

        <div><span className="image fit"><img src={classroom} alt="" /></span></div>

        </div>

      </section>
    </article>
  </Layout>
);

export default IndexPage;
