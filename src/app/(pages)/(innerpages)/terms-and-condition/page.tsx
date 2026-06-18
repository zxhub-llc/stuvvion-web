import { createMetadata } from "@/app/lib/seo";
import { BreadCrumbsDataProps, MetaDataProps } from "@/app/types";
import PageHeading from "@/app/ui/PageHeading";

const BreadcrumbsData: BreadCrumbsDataProps = {
	backgroundImage: "/assets/img/about_heading_bg.jpg",
	title: "Terms And Condition",
	breadcrumbs: [
		{ label: "Home", link: "/", active: false },
		{ label: "Terms And Condition ", link: "", active: true },
	],
};

export const metadata = createMetadata({
	title: "Terms & Conditions",
	description:
		"Terms governing the use of Stuvvion services, website, and digital platforms.",
	path: "/terms-and-conditions",
});

export default function termsAndCondition() {
	return (
		<>
			<PageHeading data={BreadcrumbsData} />
			<div className="cs_height_70 cs_height_lg_50" />
			<div className="container">
				<p className="last-updated">
					Last Updated: {new Date().toDateString().slice(3)}
				</p>
				<p>
					By purchasing and using the <strong>LeafLife Garden</strong> next-js
					theme from ThemeForest, you agree to the following terms and
					conditions.
				</p>
				<div className="cs_text_block_wrapper">
					<div className="cs_text_block">
						<h2 className="cs_fs_32">1. Refund Policy</h2>
						<p>As per ThemeForests policy, refunds are only granted if:</p>
						<ul className="cs_mp_0">
							<li>The item is not as described</li>
							<li>The item doesnt work as advertised</li>
						</ul>
						<p>
							Refunds are not provided for buyers remorse or lack of technical
							knowledge.
						</p>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">2. Support</h2>
						<p>Support covers:</p>
						<ul className="cs_mp_0">
							<li>Help with theme installation</li>
							<li>Bug fixes</li>
							<li>Documentation clarification</li>
						</ul>
						<p>
							<strong>Does not cover:</strong> Custom modifications, third-party
							plugins, or general next-js training.
						</p>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">3. Modifications</h2>
						<p>You may modify the Theme for your project, but:</p>
						<ul className="cs_mp_0">
							<li>Modified versions cannot be redistributed</li>
							<li>We cannot support heavily modified versions</li>
						</ul>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">4. Liability</h2>
						<p>We are not liable for:</p>
						<ul className="cs_mp_0">
							<li>Any damages caused by using the Theme</li>
							<li>Compatibility issues with third-party plugins</li>
							<li>Data loss during installation/use</li>
						</ul>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">5. Updates</h2>
						<p>We regularly update the Theme for:</p>
						<ul className="cs_mp_0">
							<li>Security improvements</li>
							<li>New features</li>
							<li>next-js compatibility</li>
						</ul>
						<p>It is your responsibility to keep your installation updated.</p>
					</div>
					<div className="cs_text_block">
						<h2 className="cs_fs_32">6. Governing Law</h2>
						<p>
							These terms shall be governed by the laws of [Your Country/State],
							without regard to its conflict of law provisions.
						</p>
					</div>
				</div>
			</div>
			<div className="cs_height_70 cs_height_lg_50" />
		</>
	);
}
