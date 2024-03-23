import { Package, PhoneOutgoing, Sprout } from 'lucide-react';

function AboutUs() {
  return (
    <div className="aboutUs">
      <h2>About us</h2>
      <span>Order now and appreciate the beauty of nature</span>
      <div className="aboutUs-options">
        <div className="aboutUs-options__block">
          <div className="aboutUs-options__block__icon">
            <Sprout size={60} />
          </div>
          <h4>Large Assortment</h4>
          <span>
            we offer many different types of products with fewer variations in each category.
          </span>
        </div>
        <div className="aboutUs-options__block">
          <div className="aboutUs-options__block__icon">
            <Package size={50} />
          </div>
          <h4>Fast & Free Shipping</h4>
          <span>4-day or less delivery time, free shipping and an expedited delivery option.</span>
        </div>
        <div className="aboutUs-options__block">
          <div className="aboutUs-options__block__icon">
            <PhoneOutgoing size={40} />
          </div>
          <h4>24/7 Support</h4>
          <span>answers to any business related inquiry 24/7 and in real-time.</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
