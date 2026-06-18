import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./sass/style.scss";
import { ToastContainer } from "react-toastify";
import { GlobalChildrenProps } from "./types";
import type { Metadata } from "next";
import { defaultMetadata } from "./lib/metadata";
import { inter, anton, ivyPresto, ivyOra } from '@/app/lib/fonts';
import './globals.css'

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: GlobalChildrenProps) {
	return (
		<html lang="en" className={`${inter.variable} ${ivyPresto.variable} ${ivyOra.variable} ${anton.variable}`}>
			<head>
				<link
					rel="alternate"
					type="text/plain"
					href="https://stuvvion.com/llms.txt"
					title="LLM Context"
				/>
			</head>
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
