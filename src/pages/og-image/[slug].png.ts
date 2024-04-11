import type { APIContext, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { siteConfig } from "@/site-config";
import { getAllPosts, getFormattedDate } from "@/utils";

import RobotoMono from "@/assets/roboto-mono-regular.ttf";
import RobotoMonoBold from "@/assets/roboto-mono-700.ttf";

const ogOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	// debug: true,
	fonts: [
		{
			name: "Roboto Mono",
			data: Buffer.from(RobotoMono),
			weight: 400,
			style: "normal",
		},
		{
			name: "Roboto Mono",
			data: Buffer.from(RobotoMonoBold),
			weight: 700,
			style: "normal",
		},
	],
};

const markup = (title: string, pubDate: string) =>
	html`<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]">
		<div tw="flex flex-col flex-1 w-full p-10 justify-center">
			<p tw="text-2xl mb-6">${pubDate}</p>
			<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
		</div>
		<div tw="flex items-center justify-between w-full p-10 border-t border-[#2bbc89] text-xl">
			<div tw="flex items-center">
			<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			class="me-3 h-10 w-6 sm:absolute sm:start-[-4.5rem] sm:me-0 sm:h-[3.75rem] sm:w-12"
			fill="none"
			version="1.1"
			id="Layer_1"
			width="215px"
			height="215px"
			viewBox="0 0 512 512"
			enable-background="new 0 0 512 512"
			xml:space="preserve"
			stroke="#000000"
			stroke-width="0.00512"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
				<g id="diskette">
					<g>
						<path
							fill="#656D78"
							d="M437.34,0H10.66v512h490.68V64L437.34,0z M53.332,480c-5.891,0-10.672-4.781-10.672-10.656 c0-5.906,4.781-10.688,10.672-10.688s10.664,4.781,10.664,10.688C63.996,475.219,59.223,480,53.332,480z"
						></path>
					</g>
					<g opacity="0.2">
						<g>
							<polygon
								fill="#FFFFFF"
								points="437.34,0 415.996,0 479.996,64 479.996,512 501.34,512 501.34,64 "
							></polygon>
						</g>
					</g>
					<g>
						<path
							fill="#434A54"
							d="M351.996,181.336c0,5.891-4.781,10.664-10.656,10.664H85.332c-5.891,0-10.672-4.773-10.672-10.664V10.664 C74.66,4.773,79.441,0,85.332,0H341.34c5.875,0,10.656,4.773,10.656,10.664V181.336z"
						></path>
					</g>
					<g>
						<path
							fill="#29bc89"
							d="M394.652,181.336c0,5.891-4.766,10.664-10.656,10.664H170.66c-5.891,0-10.664-4.773-10.664-10.664V10.664 C159.996,4.773,164.77,0,170.66,0h213.336c5.891,0,10.656,4.773,10.656,10.664V181.336z"
						></path>
					</g>
					<path
						fill="#434A54"
						d="M319.996,42.664c-5.891,0-10.656,4.781-10.656,10.672v85.328c0,5.891,4.766,10.672,10.656,10.672 s10.656-4.781,10.656-10.672V53.336C330.652,47.445,325.887,42.664,319.996,42.664z"
					></path>
					<g>
						<path
							fill="#29bc89"
							d="M394.652,341.344h-277.32c-5.891,0-10.672,4.766-10.672,10.656s4.781,10.656,10.672,10.656h277.32 c5.906,0,10.688-4.766,10.688-10.656S400.559,341.344,394.652,341.344z"
						></path>
						<path
							fill="#29bc89"
							d="M394.652,405.344h-277.32c-5.891,0-10.672,4.766-10.672,10.656s4.781,10.656,10.672,10.656h277.32 c5.906,0,10.688-4.766,10.688-10.656S400.559,405.344,394.652,405.344z"
						></path>
						<path
							fill="#29bc89"
							d="M117.332,298.656h277.32c5.906,0,10.688-4.766,10.688-10.656s-4.781-10.656-10.688-10.656h-277.32 c-5.891,0-10.672,4.766-10.672,10.656S111.441,298.656,117.332,298.656z"
						></path>
					</g>
				</g>
			</g></svg
		>3 font-semibold">${siteConfig.title}</p>
			</div>
			<p>by ${siteConfig.author}</p>
		</div>
	</div>`;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
	const { title, pubDate } = context.props as Props;

	const postDate = getFormattedDate(pubDate, {
		weekday: "long",
		month: "long",
	});
	const svg = await satori(markup(title, postDate), ogOptions);
	const png = new Resvg(svg).render().asPng();
	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return posts
		.filter(({ data }) => !data.ogImage)
		.map((post) => ({
			params: { slug: post.slug },
			props: {
				title: post.data.title,
				pubDate: post.data.updatedDate ?? post.data.publishDate,
			},
		}));
}
