const Savings = () => {
  return (
    <section className="savings">
      <div className="container">
        <div className="savings__box">
          <h2 className="h2-white h2 mb-bg">Save with Investa</h2>
          <div className="savings__range-box">
            <input
              className="savings__input"
              type="range"
              min="0"
              step="1000"
              max="9000"
            />
            <div className="savings__value-box">
              <span className="savings__value">N500</span>
              <span className="savings__value">N1000</span>
              <span className="savings__value">N2000</span>
              <span className="savings__value">N3000</span>
              <span className="savings__value">N4000</span>
              <span className="savings__value">N5000</span>
              <span className="savings__value">N6000</span>
              <span className="savings__value">N7000</span>
              <span className="savings__value">N8000</span>
              <span className="savings__value">N9000</span>
            </div>
          </div>
          <div className="savings__total-box mt-bg">
            <div className="savings__save-item">
              <h3>₦3,404</h3>
              <p>12 months</p>
            </div>
            <div className="savings__save-item">
              <h3>₦13,833</h3>
              <p>52weeeks</p>
            </div>
            <div className="savings__save-item">
              <h3>₦53, 321</h3>
              <p>365 days</p>
            </div>
            <a href="/" className="btn btn__white savings__link savings__btn">Start Saving</a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Savings;