import { useEffect } from "react";

export const useSetInterval = (interval: number, callback: () => void) => {
	console.log("Rendering");
	useEffect(() => {
		const intervalId = setInterval(callback, interval * 1000);
		return () => clearInterval(intervalId);
	}, [interval, callback]);
};
