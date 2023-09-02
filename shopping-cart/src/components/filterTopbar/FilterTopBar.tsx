import "./filterTopBar.scss";
import { MdEmail, MdArrowRightAlt } from "react-icons/md";

const FilterTopBar = () => {
    const options = [
        "highest rated",
        "low price to high",
        "high price to low",
    ] as const;

    return(
        <div className="FilterTopBar-wrapper">
            <h2>Mens Shoes & Sneakers</h2>
            <div>
                {options.map((option: string): JSX.Element => {
                return <p>{option}</p>;
                })}
            </div>
            <button>
                <MdEmail className="icon"/>
                Your Email
                <MdArrowRightAlt className="icon icon2"/>
            </button>
        </div>
    );
};

export default FilterTopBar;
