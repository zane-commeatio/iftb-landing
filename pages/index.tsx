import Image from "next/image"
import { Michroma } from "next/font/google"

const font = Michroma({ weight: "400", subsets: ["latin"] })

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center px-5 max-w-5xl mx-auto">
			<section
				id="hero"
				className="h-[50vh] w-full flex flex-col items-center justify-center"
			>
				<div className="glow aspect-square w-full max-w-xs relative flex flex-col items-center justify-center">
					<h1 className={` text-6xl ${font.className} mb-8`}>
						IRFTB
					</h1>

					<p className=" italic w-fit whitespace-nowrap font-serif">
						Bring ideas to the world
					</p>
				</div>
			</section>
			<section
				id="presentation"
				className="min-h-[50vh] w-full flex flex-col"
			>
				<div className="flex-1 flex flex-col items-center justify-center">
					<h2 className="text-2xl font-bold text-center mb-5 lg:mb-10 ">
						A company behind
					</h2>
					<div className="w-full flex justify-center gap-4 flex-wrap pb-10">
						<Card
							title="Le Cryptopolitain"
							description="Online media"
							image="/cryptopolitain-logo.png"
							year="2018"
						/>
						<Card
							title="Ecole Crypto"
							description="Mentorship platform"
							image="/ec.png"
							year="2020"
						/>
						<Card
							title="Asgard DAO"
							description="R&D Organisation"
							image="/asgard-logo.png"
							year="2022"
						/>
						<Card
							title="Learnify"
							description="Gamified education app"
							image="/learnify.png"
							year="2023"
						/>
					</div>
				</div>
				<footer className="h-20 border-t border-white/25 flex justify-center items-center">
					<p className="text-sm text-gray-500">By </p>
					<span className="relative inline-block w-40 aspect-[622/250]">
						<Image
							src={"/asgard-studio-logo.png"}
							alt={"asgard studio"}
							fill
							style={{ objectFit: "contain" }}
						/>
					</span>
				</footer>
			</section>
		</main>
	)
}

type CardProps = {
	title: string
	description: string
	image: string
	year: string
}

function Card({ title, description, image, year }: CardProps) {
	return (
		<div className="flex flex-col items-center justify-center h-52 w-48 border border-white/5 px-2 rounded-xl">
			<div className="relative w-full aspect-[10/8] overflow-hidden rounded-xl">
				<Image
					src={image}
					alt={title}
					fill
					style={{ objectFit: "contain" }}
				/>
			</div>

			<h3 className="text-xl font-bold">{title}</h3>
			<p className="text-center">{description}</p>
			<p className="text-gray-500 text-sm">{year}</p>
		</div>
	)
}
