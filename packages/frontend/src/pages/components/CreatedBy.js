import React from "react";

export default function CreatedBy() {
	return (
		<div className="mt-5 mb-2 text-sm text-center">
			created by{" "}
			<a href="https://github.com/patryk-siewiera">
				<div className="inline font-bold transition hover:underline hover:bg-yellow-300 hover:duration-1000">
					Patryk Siewiera
				</div>
			</a>
		</div>
	);
}
