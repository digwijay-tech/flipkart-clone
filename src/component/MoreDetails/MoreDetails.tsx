import { useState } from "react";
import { Link } from "react-router-dom";

const MoreDetails = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const handleClickOnOpen = () => {
    setIsDetailOpen((prev) => (prev = !prev));
  };
  console.log(isDetailOpen)
  return (
    <div className="text-[#fff] px-3.5 py-3.5 border-t-[#f1f2f4] col-[1/13] h-full w-full">
      <div className="flex justify-between min-[1024px]:hidden ">
        <span className="font-[inter-regular] text-[#212121] text-[14px] !leading-[20px] truncate w-[70%] ">
          Flipkart - Your go-to place for Online Shopping
        </span>
        <div onClick={handleClickOnOpen}>
          {isDetailOpen ? <span className="text-4xl !leading-[20px] text-[#212121] transition" >-</span> : <span className="text-[24px] !leading-[20px] text-[#212121] " >+</span>}
        </div>
      </div>
      <div className={` mt-2.5 overflow-hidden w-full ${isDetailOpen ? " ": "!w-0 hidden"}`}>
        <div className="text-[#878787] mt-1 text-[16px] font-[inter-bold] py-2">
          Top Stories : <Link to="">Brand Directory</Link>
        </div>
        <div className="text-[#878787] text-start font-[inter-regular] text-[12px]">
          <h1 className="text-[16px] font-[inter-bold] mb-2.5">
            Flipkart: The One-stop Shopping Destination
          </h1>
          E-commerce is revolutionizing the way we all shop in India. Why do you
          want to hop from one store to another in search of the latest phone
          when you can find it on the Internet in a single click? Not only
          mobiles. Flipkart houses everything you can possibly imagine, from
          trending electronics like laptops, tablets, smartphones, and mobile
          accessories to in-vogue fashion staples like shoes, clothing and
          lifestyle accessories; from modern furniture like sofa sets, dining
          tables, and wardrobes to appliances that make your life easy like
          washing machines, TVs, ACs, mixer grinder juicers and other
          time-saving kitchen and small appliances; from home furnishings like
          cushion covers, mattresses and bedsheets to toys and musical
          instruments, we got them all covered. You name it, and you can stay
          assured about finding them all here. For those of you with erratic
          working hours, Flipkart is your best bet. Shop in your PJs, at night
          or in the wee hours of the morning. This e-commerce never shuts down.{" "}
          <br />
          <br />
          What's more, with our year-round shopping festivals and events, our
          prices are irresistible. We're sure you'll find yourself picking up
          more than what you had in mind. If you are wondering why you should
          shop from Flipkart when there are multiple options available to you,
          well, the below will answer your question. <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Flipkart Plus
          </h2>
          A world of limitless possibilities awaits you - Flipkart Plus was
          kickstarted as a loyalty reward programme for all its regular
          customers at zero subscription fee. All you need is 500 supercoins to
          be a part of this service. For every 100 rupees spent on Flipkart
          order, Plus members earns 4 supercoins &amp; non-plus members earn 2
          supercoins. Early access during sales and shopping festivals, exchange
          offers and priority customer service are the top benefits to a
          Flipkart Plus member. In short, earn more when you shop more! <br />
          <br />
          What's more, you can even use the Flipkart supercoins for a number of
          exciting services, like:
          <br />
          An annual Zomato Gold membership
          <br />
          An annual Hotstar Premium membership
          <br />6 months Gaana plus subscription
          <br />
          Rupees 550 instant discount on flights on ixigo
          <br />
          Check out https://www.flipkart.com/plus/all-offers for the entire
          list. Terms and conditions apply.
          <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            No Cost EMI
          </h2>
          In an attempt to make high-end products accessible to all, our No Cost
          EMI plan enables you to shop with us under EMI, without shelling out
          any processing fee. Applicable on select mobiles, laptops, large and
          small appliances, furniture, electronics and watches, you can now shop
          without burning a hole in your pocket. If you've been eyeing a product
          for a long time, chances are it may be up for a no cost EMI. Take a
          look ASAP! Terms and conditions apply.
          <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            EMI on Debit Cards
          </h2>
          Did you know debit card holders account for 79.38 crore in the
          country, while there are only 3.14 crore credit card holders? After
          enabling EMI on Credit Cards, in another attempt to make online
          shopping accessible to everyone, Flipkart introduces EMI on Debit
          Cards, empowering you to shop confidently with us without having to
          worry about pauses in monthly cash flow. At present, we have partnered
          with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this
          facility. More power to all our shoppers! Terms and conditions apply.{" "}
          <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Mobile Exchange Offers
          </h2>
          Get an instant discount on the phone that you have been eyeing on.
          Exchange your old mobile for a new one after the Flipkart experts
          calculate the value of your old phone, provided it is in a working
          condition without damage to the screen. If a phone is applicable for
          an exchange offer, you will see the 'Buy with Exchange' option on the
          product description of the phone. So, be smart, always opt for an
          exchange wherever possible. Terms and conditions apply. <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            What Can You Buy From Flipkart?
          </h2>
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Mobile Phones
          </h2>
          From budget phones to state-of-the-art smartphones, we have a mobile
          for everybody out there. Whether you're looking for larger, fuller
          screens, power-packed batteries, blazing-fast processors,
          beautification apps, high-tech selfie cameras or just large internal
          space, we take care of all the essentials. Shop from top brands in the
          country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to
          name a few. Rest assured, you're buying from only the most reliable
          names in the market. What's more, with Flipkart's Complete Mobile
          Protection Plan, you will never again find the need to run around
          service centres. This plan entails you to a number of post-purchase
          solutions, starting at as low as Rupees 99 only! Broken screens,
          liquid damage to phone, hardware and software glitches, and
          replacements -<b>the Flipkart Complete Mobile Protection</b>
          covers a comprehensive range of post-purchase problems, with
          door-to-door services. <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Electronic Devices and Accessories
          </h2>
          When it comes to laptops, we are not far behind. Filter among dozens
          of super-fast operating systems, hard disk capacity, RAM, lifestyle,
          screen size and many other criterias for personalized results in a
          flash. All you students out there, confused about what laptop to get?
          Our
          <b>Back To College Store</b>
          segregates laptops purpose wise (gaming, browsing and research,
          project work, entertainment, design, multitasking) with
          recommendations from top brands and industry experts, facilitating a
          shopping experience that is quicker and simpler.
          <br />
          <br />
          Photography lovers, you couldn't land at a better page than ours.
          Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras,
          millennial favourite instant cameras or action cameras for adventure
          junkies: our range of cameras is as much for beginners as it is for
          professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big
          names you'll find in our store. Photography lovers, you couldn't land
          at a better page than ours. Cutting-edge DSLR cameras, ever reliable
          point-and-shoot cameras, millennial favourite instant cameras or
          action cameras for adventure junkies: our range of cameras is as much
          for beginners as it is for professionals. Canon, Nikon, GoPro, Sony,
          and Fujifilm are some big names you'll find in our store. <br />
          <br />
          Turn your home into a theatre with a stunning surround sound system.
          Choose from our elaborate range of Sony home theatres, JBL soundbars
          and Philips tower speakers for an experience to remember.
          <br />
          <br />
          How about jazzing up your phone with our quirky designer cases and
          covers? Our wide-ranging mobile accessories starting from headphones,
          power banks, memory cards, mobile chargers, to selfie sticks can prove
          to be ideal travel companions for you and your phone; never again
          worry about running out of charge or memory on your next vacation.
          <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Large Appliances
          </h2>
          Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful
          washing machines - discover everything you need to run a house under
          one roof. Our
          <b>Dependable TV and Appliance Store</b>
          ensures zero transit damage, with a replacement guarantee if anything
          goes wrong; delivery and installation as per your convenience and a
          double warranty (Official Brand Warranty along with an extended
          Flipkart Warranty) - rest assured, value for money is what is promised
          and delivered. Shop from market leaders in the country like Samsung,
          LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and
          Hitachi among many others.
          <br />
          <br />
          For certain product categories, Customers meeting the eligibility
          criteria will have the option to buy larger quantities. To know more
          on the eligibility criteria and terms and conditions, please reach out
          to
          <a href="mailto:Purchases.oni@flipkart.com">
            Purchases.oni@flipkart.com
          </a>
          . <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Small Home Appliances
          </h2>
          Find handy and practical home appliances designed to make your life
          simpler: electric kettles, OTGs, microwave ovens, sandwich makers,
          hand blenders, coffee makers, and many more other time-saving
          appliances that are truly crafted for a quicker lifestyle. Live life
          king size with these appliances at home.
          <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">Lifestyle</h2>
          Flipkart,
          <b>'India ka Fashion Capital'</b>, is your one-stop fashion
          destination for anything and everything you need to look good. Our
          exhaustive range of Western and Indian wear, summer and winter
          clothing, formal and casual footwear, bridal and artificial jewellery,
          long-lasting make-up, grooming tools and accessories are sure to sweep
          you off your feet. Shop from crowd favourites like Vero Moda, Forever
          21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among
          dozens of other top-of-the-ladder names. From summer staple maxi
          dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to
          street-smart biker jackets, you can rely on us for a wardrobe that is
          up to date. Explore our in-house brands like Metronaut, Anmi, and
          Denizen, to name a few, for carefully curated designs that are the
          talk of the town. Get ready to be spoiled for choice.Festivals, office
          get-togethers, weddings, brunches, or nightwear - Flipkart will have
          your back each time.
          <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Home and Furniture
          </h2>
          Moving to a new place is never easy, especially if you're buying new
          furniture. Beds, sofa sets, dining tables, wardrobes, and TV units -
          it's not easy to set up everything again. With the hundreds of options
          thrown at you, the ride could be overwhelming. What place is reliable,
          what furniture will stand the test of time? These are questions you
          must ask before you choose a store. Well, our
          <b>Durability Certified Furniture Store</b>
          has not only curated a range of furniture keeping in mind the modern
          Indian consumer but furniture that comes with a lab certification,
          ensuring they last you for up to 10 years. Yes, all our furniture has
          gone through 35 stability and load tests so that you receive only the
          best-quality furniture.
          <b>Be FurniSure</b>, always. Names to look out for are Nilkamal,
          Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.{" "}
          <br />
          <br />
          You may have your furniture all set up, but they could end up looking
          flat and incomplete without complementary decor. Curtains, cushion
          covers, bed sheets, wall shelves, paintings, floor lamps - find
          everything that turns a house to an inviting home under one roof at
          Flipkart. <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Baby and Kids
          </h2>
          Your kids deserve only the best. From bodysuits, booties, diapers to
          strollers, if you're an expecting mother or a new mother, you will
          find everything you need to set sail on a smooth parenting journey
          with the help of our baby care collection. When it comes to safety,
          hygiene and comfort, you can rely on us without a second thought.
          Huggies, Pampers, MamyPoko, and Johnson &amp; Johnson: we host only
          the most-trusted names in the business for your baby.
          <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Books, Sports and Games
          </h2>
          Work hard and no play? We don't believe in that. Get access to
          best-selling fiction and non-fiction books by your favourite authors,
          thrilling English and Indian blockbusters, most-wanted gaming
          consoles, and a tempting range of fitness and sports gadgets and
          equipment bound to inspire you to get moving. <br />
          <br />
          <h2 className="text-[14px] font-[inter-bold] mb-[10px]">
            Grocery/Supermart
          </h2>
          Launching into the grocery vertical, Flipkart introduces{" "}
          <b>Supermart</b> that is out to bring everyday essentials close to
          you. From pulses, spices, dairy, personal and sanitary care, breakfast
          essentials, health drinks, spreads, ready to cook, grooming to
          cleaning agents, we are happy to present everything you need to run a
          house. Now buy Grocery products for as low as 1 Rupee only - our{" "}
          <b>1 Rupee Store</b> presents new products every day for a nominal
          price of 1 Rupee only. Terms and conditions apply.
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
