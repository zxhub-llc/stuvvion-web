import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./sass/style.scss";
import { ToastContainer } from "react-toastify";
import { GlobalChildrenProps } from "./types";

export default function RootLayout({ children }: GlobalChildrenProps) {
	return (
		<html lang="en">
			<body>
				{children}
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
			</body>
		</html>
	);
}
