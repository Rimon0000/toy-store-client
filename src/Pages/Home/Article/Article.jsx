import React from 'react';
import img1 from "../../../assets/article/a1.jpg"
import img2 from "../../../assets/article/a2.jpg"
import img3 from "../../../assets/article/a3.jpg"

const Article = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center text-4xl font-bold pt-5 px-5 pb-2'>Read Our Latest Articles</h2>
            <p className='text-center font-semibold mb-5'>More Articles? <span className='bg-accent'>Visits our Blog</span></p>
            <div className='grid sm:grid-cols-1 md:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
  <                figure><img src={img1} alt="Shoes" /></figure>
  <                div className="card-body">
                    <h2 className="card-title">Fashion for Kids: How Soon Is Too Soon?</h2>
                    <p>In March, Vogue published an article titled “Do Seoul’s Toddlers Have the World’s Most Stylish Hair?” 
                        that featured nine street style photographs of the three-feet.</p>
                    <div className="card-actions">
                      <p>admin | October 11, 2018</p>
                    </div>
                     </div>
                   </div>
                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
  <                figure><img src={img3} alt="Shoes" /></figure>
  <                div className="card-body">
                    <h2 className="card-title">I Want a Peanut Butter and Chocolate Chip Sandwich</h2>
                    <p>When I was a kid, I used to go home after school and have some good ol’ fashioned alone time. 
                        I’d call mom, let her know I was safe, and then do kid things.</p>
                    <div className="card-actions">
                      <p>admin | October 11, 2018</p>
                    </div>
                     </div>
                   </div>
                   <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
  <                figure><img src={img3} alt="Shoes" /></figure>
  <                div className="card-body">
                    <h2 className="card-title">These Impressive Kid Fashion Designers Will Blow You Away</h2>
                    <p>If you think your New Year’s resolutions are lofty, we invite you to meet these young fashion designers. 
                        Quietly but confidently, several teens and tweens over</p>
                    <div className="card-actions">
                      <p>admin | October 11, 2018</p>
                    </div>
                     </div>
                   </div>
                
            </div>
            
        </div>
    );
};

export default Article;