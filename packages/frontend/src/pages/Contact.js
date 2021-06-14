import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";
import CreatedBy from "./components/CreatedBy";

export default function Contact() {
	return (
		<div className="max-w-4xl p-5 m-auto">
			{" "}
			<div className="p-10 text-3xl font-bold text-center shadow-xl rounded-xl bg-gradient-to-r from-red-200 to-indigo-500 login">
				Połączyła nas pasja do nowych technologii oraz dronów
			</div>
			<div className="pb-16 ml-5 mr-5 pt-7 text-md">
				Nasze dotychczasowe realizacje: Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nullam pellentesque sapien feugiat
				risus blandit eleifend. Suspendisse porta tristique dui sit amet
				sodales. Vivamus quis lacus libero. Aenean vestibulum, orci et
				pretium euismod, neque quam pellentesque magna, at fermentum
				ipsum libero eget ante. Donec non nulla consectetur, convallis
				arcu a, egestas ante. Ut quis feugiat nisi, a molestie quam.
				Aliquam sed odio et augue faucibus finibus. In non nulla sit
				amet mauris auctor placerat placerat ac eros. Cras et justo
				vitae enim pretium fermentum. Mauris et egestas leo. Sed
				elementum risus quis sem mattis tempus. Nam in ligula ut felis
				luctus pulvinar ut ut turpis. Maecenas consequat malesuada
				rutrum. Vivamus vehicula tellus at malesuada vestibulum. Quisque
				nisi lectus, vulputate at dignissim sed, congue et tellus. Morbi
				scelerisque turpis vel urna aliquam condimentum. Donec congue
				venenatis mauris, sit amet tempor velit lobortis vitae.
				Pellentesque vel bibendum ligula, vel tristique enim. Maecenas
				et semper magna, cursus tristique augue.
			</div>
			<div className="block text-center">
				<Link to="/landingPage">
					<button className="p-3 mb-5 font-semibold bg-gray-200 rounded-md shadow-md w-60 login hover:bg-gray-400 hover:underline">
						Powrót do strony głównej
					</button>
				</Link>
			</div>
			<CreatedBy />
		</div>
	);
}
