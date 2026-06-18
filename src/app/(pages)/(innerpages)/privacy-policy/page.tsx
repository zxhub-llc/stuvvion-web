import { BreadCrumbsDataProps, MetaDataProps } from "@/app/types";
import PageHeading from "@/app/ui/PageHeading";

const BreadcrumbsData: BreadCrumbsDataProps = {
	backgroundImage: "/assets/img/about_heading_bg.jpg",
	title: "Privacy Policy",
	breadcrumbs: [
		{ label: "Home", link: "/", active: false },
		{ label: "Privacy Policy", link: "", active: true },
	],
};

export const metadata: MetaDataProps = {
	title: "Privacy Policy - Garden Landscape Design Service Website",
};

export default function privacyPolicy() {
	return (
		<>
			<PageHeading data={BreadcrumbsData} />
			<div className="cs_height_70 cs_height_lg_50" />
			<div className="container">
				<p className="last-updated">
					Last Updated: {new Date().toDateString().slice(3)}
				</p>
				<p>
					Thank you for choosing <strong>LeafLife Garden</strong>, a premium
					next-js theme available on ThemeForest. This Privacy Policy explains
					how we handle information related to the use of our theme.
				</p>
				<div className="cs_text_block_wrapper">
					<div className="cs_text_block">
						<h2 className="cs_fs_32">1. Information We Collect</h2>
						<ul className="cs_mp_0">
							<li>
								<strong>Personal Data:</strong> If you submit a support request
								or contact us, we may collect your name, email address, and
								other details you provide.
							</li>
							<li>
								<strong>Non-Personal Data:</strong> Our theme may collect
								anonymous usage data (e.g., next-js version, PHP version) for
								compatibility and support purposes.
							</li>
							<li>
								<strong>Cookies:</strong> The theme itself does not set cookies,
								but next-js and third-party plugins (if used) may do so.
							</li>
						</ul>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">2. How We Use Your Information</h2>
						<ul className="cs_mp_0">
							<li>To provide customer support and updates</li>
							<li>To improve the themes functionality and user experience</li>
							<li>To comply with legal obligations</li>
						</ul>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">3. Data Sharing</h2>
						<p>
							We do not sell or share your personal data with third parties
							except:
						</p>
						<ul className="cs_mp_0">
							<li>When required by law</li>
							<li>
								With service providers who assist in theme support (under
								confidentiality agreements)
							</li>
						</ul>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">4. Third-Party Services</h2>
						<p>
							The LeafLife theme may integrate with third-party services (e.g.,
							Google Fonts). These services have their own privacy policies
							which we recommend reviewing.
						</p>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">5. Data Security</h2>
						<p>
							We implement reasonable security measures to protect your
							information, but no internet transmission is 100% secure.
						</p>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">6. Changes to This Policy</h2>
						<p>
							We may update this privacy policy periodically. The updated
							version will be posted here with a new Last Updated date.
						</p>
					</div>
				</div>
			</div>
			<div className="cs_height_70 cs_height_lg50" />
		</>
	);
}
