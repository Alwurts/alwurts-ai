"use client";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type React from "react";
import { useLayoutEffect, useRef } from "react";

interface ChatInputProps extends React.ComponentProps<typeof Textarea> {
	submitMessage?: () => void;
}

export function ChatInput({
	// Custom props
	submitMessage,
	// Textarea props
	value,
	onChange,
	className,
	...props
}: ChatInputProps) {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (!submitMessage) {
			return;
		}
		if (e.key === "Enter" && !e.shiftKey) {
			if (typeof value === "string" && value.length === 0) {
				return;
			}
			e.preventDefault();
			submitMessage();
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: We need value to update the height
	useLayoutEffect(() => {
		const textArea = textareaRef.current;

		if (textArea) {
			textArea.style.height = "0px";
			const scrollHeight = textArea.scrollHeight;
			textArea.style.height = `${scrollHeight}px`;
		}
	}, [textareaRef, value]);

	return (
		<Textarea
			ref={textareaRef}
			{...props}
			value={value}
			onChange={onChange}
			onKeyDown={handleKeyDown}
			className={cn("min-h-min max-h-[200px] resize-none", className)}
			rows={1}
		/>
	);
}

ChatInput.displayName = "ChatInput";
