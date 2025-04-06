import { StyledItem } from "./StyledItem.js";

import PropTypes from "prop-types";

import { FaLocationArrow } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

export const Item = ({ name, location, speaker, type, time }) => {
  return (
    <StyledItem>
      <h2>{name}</h2>
      <ul className="managment">
        <li>
          <p>
            <span>
              <FaLocationArrow />
            </span>
            {location}
          </p>
        </li>
        <li>
          <p>
            <span>
              <FaUser />
            </span>
            {speaker}
          </p>
        </li>
        <li>
          <p>
            <span>
              <FaCalendar />
            </span>
            {type}
          </p>
        </li>
        <li>
          <p>
            <span>
              <FaClock />
            </span>
            {time.start}
          </p>
        </li>
      </ul>
    </StyledItem>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

