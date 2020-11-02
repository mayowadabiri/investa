const Button = (props) => {
  return (
    <>
      <a href="/" className={["btn", props.btn_color].join(" ")}>
        {props.children}
      </a>
    </>
  );
};

export default Button;
