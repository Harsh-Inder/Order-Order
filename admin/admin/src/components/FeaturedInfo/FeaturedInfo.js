import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState , useEffect} from "react";
import { userRequest } from "../../requestMethods"; //D

const FeaturedInfo = () => {
  //D s
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  //D e
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle"> Revenue </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $ {income[1]?.total} </span>
          <span className="featuredMoneyRate">
            {/* D s */}%{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
            {/* D e */}
          </span>
        </div>
        <span className="featuredSub"> Compared to Last Month </span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle"> Sales </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $ 5,145 </span>
          <span className="featuredMoneyRate">
            -1.5 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub"> Compared to Last Month </span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle"> Cost </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> $ 2,565 </span>
          <span className="featuredMoneyRate">
            +2.35 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub"> Compared to Last Month </span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
