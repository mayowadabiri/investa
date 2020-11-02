const Register = () => {
  return (
    <section className="register">
      <div className="container register__container">
        <div className="register-box">
          <div className="register__content-box">
            <p className="register__text purple">Ready to get started?</p>
            <p className="register__text">Get in touch or create an account</p>
          </div>
          {/* <div className="register__link-box"> */}
            <a
              href="/"
              className="btn  btn__plan btn__plan-purple register__link"
            >Start Now</a>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Register;
