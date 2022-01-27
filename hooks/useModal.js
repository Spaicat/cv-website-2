import { useState, useCallback } from "react";

const useModal = (initialState = false) => {
	const [isShowing, setIsShowing] = useState(initialState);

	const toggle = useCallback(
		() => setIsShowing(!isShowing),
		[isShowing]
	);

	return [
		isShowing,
		toggle,
	];
};

export default useModal;