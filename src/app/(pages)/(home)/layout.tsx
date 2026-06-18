import AOSInit from "@/app/helper/AosInit";
import { GlobalChildrenProps } from "@/app/types";
import Footer1 from "@/app/ui/Footer/Footer1";
import Header from "@/app/ui/Header/Header";
import UnderConstruction from "@/app/under-construction";

const Layout = ({ children }: GlobalChildrenProps) => {
	return (
		<>
			<UnderConstruction />
			{/* <Header />
			{children}
			<Footer1 /> */}
			<AOSInit />
		</>
	);
};

export default Layout;
