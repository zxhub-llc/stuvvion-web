import AOSInit from "@/app/helper/AosInit";
import { GlobalChildrenProps } from "@/app/types";
import Footer from "@/app/ui/Footer/Footer";
import Header from "@/app/ui/Header/Header";

const layout = ({ children }: GlobalChildrenProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<AOSInit />
		</>
	);
};

export default layout;
