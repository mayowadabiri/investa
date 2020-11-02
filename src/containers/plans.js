import { useState } from "react";
import plan_svg from "../assets/plan_svg.png";
import Button from "../components/button";
import Plan from "../components/plan";

const Plans = () => {
  const [plan, setPlan] = useState("savings");

  const timeLineStyles = ["plans__timeline"];
  const changePlan = (type) => {
    switch (type) {
      case "savings":
        setPlan("savings");
        break;
      case "investment":
        setPlan("investment");
        break;
      case "cooperative":
        setPlan("cooperative");
        break;
      default:
        setPlan("savings");
        timeLineStyles.push("plans__timeline-0");
    }
  };

  return (
    <section className={["plans", "mt-bg", "mb-bg"].join(" ")}>
      <div className="plans__container container">
        <div className="plans__container-box">
          <img src={plan_svg} alt="joyous plan" className="plans__img" />
          <div className="plans__content">
            {plan === "savings" && (
              <div>
                <Plan
                  title="Savings"
                  text="Join over 100,000 users that use our savings feature called reach their general/personal savings goals more quickly. We have two awesome plan you can pick from."
                />
                <Button btn_color="btn  btn__plan btn__plan-purple plans__btn">
                  Read More
                </Button>
              </div>
            )}
            {plan === "investment" && (
              <div>
                <Plan
                  title="Investment"
                  text="Think of what to do with the funds in your Just save account, choose Auto-Invest and let investa automatically invest your fund in your chosen investment portfolio and watch your savings generate ROI for you effortlessly"
                />
                <Button btn_color="btn  btn__plan  btn__plan-white plans__btn">
                  Start Investing Now
                </Button>
              </div>
            )}
            {plan === "cooperative" && (
              <div>
                <Plan
                  title="Cooperative"
                  text="Join our cooperative wherever you are, save more with others and access low interest loans for your personal and business purposes. Our easy to use financial tools gives you seamless experience.                "
                />
                <Button btn_color="btn btn__plan  btn__plan-purple plans__btn">
                  Join Now
                </Button>
              </div>
            )}

            <div className="plans__layout">
              <div className="plans__timeline-box">
                <div
                  className={[
                    "plans__timeline",
                    plan === "savings"
                      ? "plans__timeline-0"
                      : plan === "investment"
                      ? "plans__timeline-1"
                      : plan === "cooperative"
                      ? "plans__timeline-2"
                      : "plans__timeline-0",
                  ].join(" ")}
                ></div>
              </div>
              <div className="plans__timeline-types">
                <p onClick={() => changePlan("savings")}>Savings</p>
                <p onClick={() => changePlan("investment")}>Investment</p>
                <p onClick={() => changePlan("cooperative")}>Cooperative</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
