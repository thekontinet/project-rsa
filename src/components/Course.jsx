import React from "react";
import PropTypes from "prop-types";
import { FaAward, FaCheck, FaCheckCircle, FaClock } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import OfferBadge from "./OfferBadge.jsx";
import classNames from "classnames";

function Course({
  title,
  subtitle,
  description,
  level,
  price,
  status,
  date,
  imageURL,
}) {
  const levels = ["Beginners", "Intermediate", "Advanced"];
  const statusIcons = {
    open: <FaCheckCircle className="w-3 h-3" />,
    closed: <AiFillCloseCircle className="w-3 h-3" />,
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <img
        className="w-full h-52 object-cover"
        src={imageURL ?? "/offer.svg"}
      />
      <div className="px-4 py-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-bold text-left text-sm">{title}</h4>
            <span className="flex items-center gap-2 text-sm">
              <FaAward /> {levels[level] ?? "Beginners"}
            </span>
          </div>
          <p className="text-sm">{subtitle}</p>
        </div>
        <p className="text-justify text-sm w-full my-2">{description}</p>
        <div className="flex justify-between items-center">
          <span
            className={classNames(
              "text-xs font-bold py-1 px-3 rounded-full text-white flex items-center gap-2",
              {
                "bg-green-500": status === "open",
                "bg-gray-500": status === "closed",
                "bg-amber-500": !status,
              }
            )}
          >
            {status ? status?.toUpperCase() : date}
            {statusIcons[status] ?? <FaClock className="w-3 h-3" />}
          </span>
          <span className="font-bold text-lg">{price}</span>
        </div>
      </div>
    </div>
  );
}

Course.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  level: PropTypes.oneOf([0, 1, 2]),
  status: PropTypes.oneOf(["open", "closed"]),
  date: PropTypes.string,
};

export default Course;
