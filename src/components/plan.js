const Plan = ({ title, text }) => {
  return (
    <>
      <h2 className="h2 h2-dark">{title}</h2>
      <p className={["line", "line-dark", "plans__text", "mb-xm"].join(" ")}>{text}</p>
    </>
  );
};

export default Plan