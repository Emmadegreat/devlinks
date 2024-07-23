"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		if (email.trim() === "") {
			setIsError(true);
		} else {
			setIsError(false);
			// Handle form submission
		}
	};

	return (
		<div
			className="h-screen flex justify-center items-center"
			style={{ fontFamily: "instrument sans" }}
		>
			<h1>hello emma</h1>
    </div>
  );
};

export default Login;
