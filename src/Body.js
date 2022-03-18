import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function Body() {
  return (<>
    <div className="background">

    <h1>Welcome to our new website!</h1>
    <h5><cite>We are providing flowers for every moments.</cite></h5>

</div>
  <div className="bodydata">
  <h1>We are Dara.</h1>
  <h5>We are San Diego’s favourite bespoke florist.<br/>
  We are passionate about people, love, weddings, and all things floral.</h5>
</div>

<div className="threeph">
<div className="about three">
  <div className="thead"><h2>-ABOUT-</h2></div>
  <div className="timg aboutimg"  data-aos="flip-left" data-aos-delay="100"></div>
  <div className="thead"><h4>Award-winning florist based in San Diego, CA.</h4></div>

</div>
<div className="content three">
<div className="thead"><h2>-CONTENT-</h2></div>
<div className="timg contentimg"  data-aos="flip-left" data-aos-delay="200"></div>
<div className="thead"><h4>Do you have an enquiry? Get in touch!</h4></div>
</div>
<div className="workshop three">
<div className="thead"><h2>-WORKSHOP-</h2></div>
<div className="timg workshopimg"  data-aos="flip-left" data-aos-delay="300"></div>
<div className="thead"><h4>The best flower arranging classes in California.</h4></div>
</div>

</div>
<div className="feedbackmain">
<div class="feedback" data-aos="fade-right" data-aos-delay="400">
        <div class="feedlimg feedimglr"></div>
        <div class="feedtext">
          <h3>A huge thank you for doing such a great job on our wedding flowers – they looked absolutely beautiful! I will be recommending you to all my friends and family members!
            <br/></h3>
          <h4>TAKASHI</h4>
        </div>
    </div>

<div class="feedback" data-aos="fade-left" data-aos-delay="600">
        <div class="feedrimg feedimglr"></div>
        <div class="feedtext">
          <h3>Amazing flowers! My husband sent me a bouquet of flowers for our wedding anniversary from Dara and they were absolutely gorgeous and looked great when they arrived.<br/></h3>
          <h4>CAROLINE</h4>
        </div>
    </div>

</div>
{/* 
<div class="takpro">
        <div class="car"></div>
        <div class="tak"></div>
    </div>

    <div class="twopro">
        <div class="caroline cartak">Amazing flowers! My husband sent me a bouquet of flowers for our wedding anniversary from Dara and they were absolutely gorgeous and looked great when they arrived.<br/>
            <h6>CAROLINE</h6>
        </div>
        <div class="takashi cartak">A huge thank you for doing such a great job on our wedding flowers – they looked absolutely beautiful! I will be recommending you to all my friends!
            <br/>
            <h6>TAKASHI</h6>
        </div>
    </div> */}



<div className="threeph">
<div className="three1" data-aos="flip-up" data-aos-delay="500">
  <div className="thead"><h2>-ABOUT-</h2></div>
  <div className="mapl">
    <div className="maplr"></div>
  </div>
  
<h3>Dara is an award-winning florist in San Diego, CA providing flowers for weddings and events.<br/><br/> We offer flower delivery all over San Diego and California.</h3>


</div>
<div className="three1" data-aos="flip-up" data-aos-delay="600">
<div className="thead"><h2>-VISIT-</h2></div>
<div className="map"></div>
<h3>3999 Mission Boulevard, San Diego CA 92109 1-202-555-1212</h3>

</div>
<div className="three1" data-aos="flip-up" data-aos-delay="700">
<div className="thead"><h2>-OPENING-</h2></div>
<div className="mapr">
<h4>Monday – Closed<br/> Tuesday – 9am – 5pm<br/> Wednesday – 9am – 5pm<br/> Thursday – 9am – 7pm
                <br/> Friday – 9am – 5pm
                <br/> Saturday – 9am – 12pm<br/> Sunday – Closed </h4>
                
</div><h3>Times may vary during busy periods such as Valentine’s Day and Mother’s Day.</h3>
     
</div>

</div>

</>
  )
}

export default Body