import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html
			lang="en"
			className="w-screen h-screen overflow-x-hidden bg-black text-white"
		>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
