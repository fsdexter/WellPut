import React from "react";

export const PriceInput = () => {
	return (
		<form>
			<div className="border border-warning pt-2">
				<div className="row">
					<div className="col-4 ">
						<h3 className="ml-4">Price</h3>
					</div>
					<div className="col-3">
						<input type="text" className="form-control" placeholder="Min." />
					</div>
					<div className="col-3 mr-2">
						<input type="text" className="form-control" placeholder="Max." />
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-4 ">
						<h3 className="ml-4">Deposit</h3>
					</div>
					<div className="col-3">
						<input type="text" className="form-control" placeholder="Min." />
					</div>
					<div className="col-3 mr-2 mb-2">
						<input type="text" className="form-control" placeholder="Max." />
					</div>
				</div>
			</div>
		</form>
	);
};
