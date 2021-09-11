import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const PriceInput = () => {
	const { store, actions } = useContext(Context);
	const [money, setMoney] = useState({
		priceMIN: "",
		priceMAX: "",
		depositoMIN: "",
		depositoMAX: ""
	});
	const changeHandler = e => {
		//"[e.target.name]" is the name of form inputs
		setMoney({ ...money, [e.target.name]: e.target.value });
		actions.setMoney({ ...money, [e.target.name]: e.target.value });
	};

	return (
		<form>
			<div className="border border-warning pt-4 pb-4">
				<div className="row">
					<div className="col-4 ">
						<h3 className="ml-4">Price</h3>
					</div>
					<div className="col-3 ml-4">
						<input
							type="text"
							className="form-control"
							placeholder="Min."
							name="priceMIN"
							onChange={changeHandler}
						/>
					</div>
					<div className="col-3 mr-2">
						<input
							type="text"
							className="form-control"
							placeholder="Max."
							name="priceMAX"
							onChange={changeHandler}
						/>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-4 ">
						<h3 className="ml-4">Deposit</h3>
					</div>
					<div className="col-3 ml-4">
						<input
							type="text"
							className="form-control"
							placeholder="Min."
							name="depositoMIN"
							onChange={changeHandler}
						/>
					</div>
					<div className="col-3 mr-2 mb-2">
						<input
							type="text"
							className="form-control"
							placeholder="Max."
							name="depositoMAX"
							onChange={changeHandler}
						/>
					</div>
				</div>
			</div>
		</form>
	);
};
