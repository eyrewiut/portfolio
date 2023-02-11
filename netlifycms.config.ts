import {CmsConfig} from "netlify-cms-core";

const config: CmsConfig = {
	backend: {
		name: "github",
		repo: "eyrewiut/portfolio",
		branch: "master"
	},
	media_folder: "public/media",
	public_folder: "/media",
	collections: [
		{
			name: "article",
			label: "Article",
			folder: "src/content/articles",
			create: true,
			fields: [
				{
					name: "title",
					widget: "string",
				},
				{
					name: "thumbnail",
					widget: "image",
					required: false,
					allow_multiple: false
				},
				{name: "author", widget: "string", default: "George Newton"},
				{
					name: "abstract",
					widget: "text",
				},
				{
					name: "body",
					widget: "markdown",
				},
				{
					name: "category",
					widget: "select",
					options: ["blog", "portfolio"],
					default: "blog"
				},
				{
					name: "date",
					widget: "datetime",
					time_format: false,
					date_format: "DD-MM-YYYY"
				},
			]
		},
	]
};

export default config;
