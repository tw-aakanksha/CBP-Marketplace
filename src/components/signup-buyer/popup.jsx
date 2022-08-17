/* eslint-disable react/prop-types */
import React from "react";

const Popup = ({ popup, closePopup }) => {
	return (
		<div className={popup ? "popup popup--open" : "popup"}>
			<div className="close" onClick={closePopup}>
				{" "}
				X{" "}
			</div>

			<p>Success </p>
		</div>
	);
};

export default Popup;
