import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle"> Revenue </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney"> $ 2,145 </span>
                <span className="featuredMoneyRate"> 
                    -11.45 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub"> Compared to Last Month </span>
        </div>
            
        <div className="featuredItem">
            <span className="featuredTitle"> Sales </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney"> $ 5,145 </span>
                <span className="featuredMoneyRate"> 
                    -1.5 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub"> Compared to Last Month </span>
        </div>

        <div className="featuredItem"> 
            <span className="featuredTitle"> Cost </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney"> $ 2,565 </span>
                <span className="featuredMoneyRate"> 
                    +2.35 <ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub"> Compared to Last Month </span>
        </div>
    </div>
  )
}

export default FeaturedInfo