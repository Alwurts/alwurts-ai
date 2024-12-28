// @ts-nocheck
"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";
import type { ComponentProps, HTMLAttributes, ImgHTMLAttributes } from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

const components = {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Alert,
	AlertTitle,
	AlertDescription,
	h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
		<h1
			className={cn(
				"font-heading mt-2 scroll-m-20 text-4xl font-bold",
				className,
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={cn(
				"font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className={cn(
				"font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className={cn(
				"font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
		<h5
			className={cn(
				"mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
		<h6
			className={cn(
				"mt-8 scroll-m-20 text-base font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	a: ({ className, ...props }: HTMLAttributes<HTMLAnchorElement>) => (
		<a
			className={cn("font-medium underline underline-offset-4", className)}
			{...props}
		/>
	),
	p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
		<p
			className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
		<ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
	),
	ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
		<ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
	),
	li: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
		<li className={cn("mt-2", className)} {...props} />
	),
	blockquote: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
		<blockquote
			className={cn("mt-6 border-l-2 pl-6 italic", className)}
			{...props}
		/>
	),
	img: ({ className, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
		// biome-ignore lint/a11y/useAltText: <explanation>
		<img className={cn("rounded-md", className)} alt={alt} {...props} />
	),
	hr: ({ ...props }: HTMLAttributes<HTMLHRElement>) => (
		<hr className="my-4 md:my-8" {...props} />
	),
	table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-y-auto">
			<table
				className={cn(
					"relative w-full overflow-hidden border-none text-sm",
					className,
				)}
				{...props}
			/>
		</div>
	),
	tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
		<tr
			className={cn("last:border-b-none m-0 border-b", className)}
			{...props}
		/>
	),
	th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
		<th
			className={cn(
				"px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
		<td
			className={cn(
				"px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
		<code
			className={cn(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
				className,
			)}
			{...props}
		/>
	),
	Link: ({ className, ...props }: ComponentProps<typeof Link>) => (
		<Link
			className={cn("font-medium underline underline-offset-4", className)}
			{...props}
		/>
	),
	LinkedCard: ({ className, ...props }: ComponentProps<typeof Link>) => (
		<Link
			className={cn(
				"flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10",
				className,
			)}
			{...props}
		/>
	),
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
