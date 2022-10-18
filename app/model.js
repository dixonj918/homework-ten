var MODEL = (function(){
    var _homeContent = `<section class="hero">
    <div class="hero-container">
      <div class="travel-fly">travel-fly</div>
      <div class="travel-statement">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
        aliquid minus nemo sed est.
      </div>
      <div class="read-more">read more</div>
    </div>
  </section>
  <section class="promo-trips">
    <div class="israel">
      <h5>ISRAEL</h5>
      <h4>from $1000</h4>
      <div class="learn-more">learn more</div>
    </div>
    <div class="usa">
      <h5>U.S.A</h5>
      <h4>from $1500</h4>
      <div class="learn-more">learn more</div>
    </div>
    <div class="austrailia">
      <h5>AUSTRAILIA</h5>
      <h4>from $1800</h4>
      <div class="learn-more">learn more</div>
    </div>
  </section>
  <section class="booking">
    <div class="booking-wrapper">
      <h1>Booking Form</h1>
      <div class="short-input">
        <input type="text" placeholder="name..." />
        <input type="text" placeholder="email..." />
      </div>
      <div class="short-input">
        <input type="text" placeholder="country..." />
        <input type="text" placeholder="hotel..." />
      </div>
      <div class="long-input">
        <label for="Check-in">Check-in</label>
        <input type="text" placeholder="9/23/22" />
      </div>
      <div class="long-input">
        <label for="Check-out">Check-out</label>
        <input type="text" placeholder="9/23/22" />
      </div>

      <div class="booking-info">
        Adult
        <div class="box">
          2 <img src="images/down-arrow.svg" alt="" />
        </div>
        Children
        <div class="box">
          2 <img src="images/down-arrow.svg" alt="" />
        </div>
        Rooms
        <div class="box">
          2 <img src="images/down-arrow.svg" alt="" />
        </div>
      </div>
      <div class="message">
        <input type="text" placeholder="message..." />
      </div>
      <div class="sbtbtn"><input type="submit" value="submit" /></div>
    </div>
  </section>
</div>`;
    var _aboutContent =`<div class="aboutTitle">ABOUT:</div>
    <div class="aboutText">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
        quia non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="clientTitle">CLIENT QUOTES:</div>
    <div class="clientQuote">
      <div class="clientPhoto">
        <img
          src="images/about-client-01.jpg"
          alt="Miranda Brown"
        />
      </div>
      <div class="clientText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo.
      </div>
      <div class="clientName">- Miranda Brown</div>
    </div>
    <div class="clientQuote">
      <div class="clientPhoto">
        <img src="images/about-client-02.jpg" alt="Johnathan Wes" />
      </div>
      <div class="clientText">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo.
      </div>
      <div class="clientName">- Johnathan Wes</div>
    </div>`;
    var _toursContent = `<div class="hero-tour">
    <div class="heroTours">tours:</div>
  </div>
  <div class="tourWrapper">
    <div
      class="tourPhotoWrapper"
      style="background-image: url(images/israel/israel.jpg)"
    >
      <h1>Israel</h1>
      <div class="price">from $1000</div>
      <div class="learnMore"><a id=israel href="#">Learn More</a></div>
    </div>
    <div
      class="tourPhotoWrapper"
      style="background-image: url(images/usa/usa.jpg)"
    >
      <h1>U.S.A</h1>
      <div class="price">from $1500</div>
      <div class="learnMore"><a href="usa.html">Learn More</a></div>
    </div>
    <div
      class="tourPhotoWrapper"
      style="background-image: url(images/australia/australia.jpg)"
    >
      <h1>Australia</h1>
      <div class="price">from $1800</div>
      <div class="learnMore"><a href="aus.html">Learn More</a></div>
    </div>
    <div
      class="tourPhotoWrapper"
      style="background-image: url(images/new-zealand/newZealand.jpg)"
    >
      <h1>NewZealand</h1>
      <div class="price">from $1000</div>
      <div class="learnMore"><a href="newzea.html">Learn More</a></div>
    </div>
    <div
      class="tourPhotoWrapper"
      style="background-image: url(images/france/france.jpg)"
    >
      <h1>France</h1>
      <div class="price">from $2500</div>
      <div class="learnMore"><a href="france.html">Learn More</a></div>
    </div>
    <div
      class="tourPhotoWrapper"
      style="background-image: url(images/egypt/egypt.jpg)"
    >
      <h1>Egypt</h1>
      <div class="price">from $900</div>
      <div class="learnMore"><a href="egypt.html">Learn More</a></div>
    </div>
    <div
      class="tourPhotoWrapper"
      style="background-image: url(images/japan/japan.jpg)"
    >
      <h1>Japan</h1>
      <div class="price">from $1300</div>
      <div class="learnMore"><a href="japan.html">Learn More</a></div>
    </div>
    <div
      class="tourPhotoWrapper"
      style="background-image: url(images/canada/canada.jpg)"
    >
      <h1>Canada</h1>
      <div class="price">from $2000</div>
      <div class="learnMore"><a href="canada.html">Learn More</a></div>
    </div>
    <div
      class="tourPhotoWrapper"
      style="background-image: url(images/uae/uae.jpg)"
    >
      <h1>U.A.E</h1>
      <div class="price">from $3000</div>
      <div class="learnMore"><a href="uae.html">Learn More</a></div>
    </div>`;
    var _specialOffersContent = `      <div class="contactTitle"><h1>SPECIAL OFFER(S):</h1></div>
    <div class="offerWrappers">
      <div class="offerPhoto">
        <img src="images/special-offers/spain.jpg" alt="spain" />
      </div>
      <div class="offerText">
        <h1>barcelona, spain<span> (20% off!)</span></h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
        <div class="offerLearn">Learn More</div>
      </div>
    </div>
    <div class="offerWrappers">
      <div class="offerPhoto">
        <img src="images/special-offers/thailand.jpg" alt="spain" />
      </div>
      <div class="offerText">
        <h1>bangkok, thailand<span> (10% off!)</span></h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
        <div class="offerLearn">Learn More</div>
      </div>
    </div>`;
    var _blogContent = `      <div class="contactTitle"><h1>Blog:</h1></div>
    <div class="blogWrapper">
      <div class="wrapperDate">
        <h4>06</h4>
        <h5>Jun</h5>
      </div>
      <div class="heroContainer">
        <img
          src="images/blog/9cba108c5ac096ceff2a3d446e0b7b45.jpg"
          alt="blogger"
        />
        <div class="blogText">
          <h6>Sed et persipiatis unde omnis iste natus</h6>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
    <div class="blogWrapper">
      <div class="wrapperDate">
        <h4>06</h4>
        <h5>Jun</h5>
      </div>
      <div class="heroContainer">
        <img
          src="images/blog/9cba108c5ac096ceff2a3d446e0b7b45.jpg"
          alt="blogger"
        />
        <div class="blogText">
          <h6>Sed et persipiatis unde omnis iste natus</h6>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>`;
    var _contactContent = `      <div class="contactTitle"><h1>Contact US:</h1></div>
    <div class="contact">
      <div class="map">
        <div class="map-image"></div>
        <div class="map-address">
          <p>travel-fly Inc.</p>
          Marmora Road, Glasgow, D04 89GR.
          <p>Freephone:+1 800 559 6580</p>
          <p>Telephone:+1 800 603 6035</p>
          <p>FAX:+1 800 889 9898</p>
          <p>E-mail: mail@travelfly.org</p>
        </div>
      </div>
      <div class="contactForm">
        <input
          class="textFields"
          type="text"
          name="yourName"
          id="yourName"
          placeholder="Your Name..."
        />
        <input
          class="textFields"
          type="text"
          name="email"
          id="email"
          placeholder="Email Address..."
        />
        <input
          class="textFields"
          type="text"
          name="company"
          id="company"
          placeholder="Company..."
        />
        <input
          class="messageText"
          type="text"
          name="message"
          id="message"
          placeholder="Message..."
        />
        <input class="sendMessage" type="submit" value="Send Message" />
      </div>
    </div>`;
    var _israelContent = `<div class="heroTour-israel">
    <div class="tourTitle"><h1>Israel tour package:</h1></div>
    <div class="tourPrice">STARTING FROM $1000 (prices may vary)</div>
  </div>
  <div class="wrapper">
    <img src="images/israel/israel-tour-1.jpg" alt="israel tour 1" /><img
      src="images/israel/israel-tour-02.jpg"
      alt="tour 2"
    />
    <img src="images/israel/israel-tour-03.jpg" alt="tour 3" />
  </div>
  <div class="textBlock">
    <h1>Day #1:</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
      ab illo inventore veritatis et quasi architecto beatae vitae dicta
      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
      quia non numquam eius modi tempora incidunt ut labore et dolore magnam
      aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="textBlock">
    <h1>Day #2:</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
      ab illo inventore veritatis et quasi architecto beatae vitae dicta
      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
      quia non numquam eius modi tempora incidunt ut labore et dolore magnam
      aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="textBlock">
    <h1>Day #3:</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
      ab illo inventore veritatis et quasi architecto beatae vitae dicta
      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
      quia non numquam eius modi tempora incidunt ut labore et dolore magnam
      aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="bookNow">BOOK NOW</div>`;

var _updateView = function(pageName){
console.log("Model" + pageName);
var pageContent = "_" + pageName;
$(".app").html(eval(pageContent));
$(".appTour").html(eval(pageContent))

if(pageName == "homeContent"){
    $("#logo").removeClass("aboutLogo");
    $("#links").removeClass("aboutLinks");
    $("#links").addClass("links");
}else {
$("#logo").addClass("aboutLogo");
$("#links").addClass("aboutLinks");
$("#links").removeClass("links");
}

    };
var _myName = "James";


return{
    updateView: _updateView,
};

})();