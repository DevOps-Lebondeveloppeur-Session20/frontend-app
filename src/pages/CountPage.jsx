import { Container, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useProductStore } from "../store/product";

const CountPage = () => {
	const { fetchCount, count } = useProductStore();
	const [error, setError] = useState("");

	useEffect(() => {
		fetchCount().then((res) => setError(res.success ? "" : res.message));
	}, [fetchCount]);

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Number of Products 📦
				</Text>
				{error ? (
					<Text color='red.500'>{error}</Text>
				) : count === null ? (
					<Spinner size='xl' />
				) : (
					<Text fontSize='6xl' fontWeight='bold'>
						{count}
					</Text>
				)}
			</VStack>
		</Container>
	);
};
export default CountPage;
