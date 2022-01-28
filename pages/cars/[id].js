import { useRouter } from "next/router"

export default function Car() {
	const router = useRouter()
	const { id } = router.query

	return <div>
		<h1>This is the dynamic car component for:</h1>
		<h2>{id}</h2>
	</div>
}