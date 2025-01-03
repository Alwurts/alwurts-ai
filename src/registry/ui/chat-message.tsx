import { MarkdownContent } from "@/components/ui/markdown-content";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { SparklesIcon, UserIcon } from "lucide-react";
import React, { type ReactNode } from "react";

const chatMessageVariants = cva("flex gap-4 w-full", {
	variants: {
		variant: {
			default: "",
			bubble: "",
			full: "p-5",
		},
		align: {
			left: "justify-start mr-auto",
			right: "justify-end ml-auto",
		},
		size: {
			sm: "text-sm",
			default: "text-base",
			lg: "text-lg",
		},
		type: {
			incoming: "",
			outgoing: "",
		},
	},
	compoundVariants: [
		{
			variant: "full",
			type: "outgoing",
			className: "bg-muted",
		},
		{
			variant: "full",
			type: "incoming",
			className: "bg-background",
		},
	],
	defaultVariants: {
		variant: "default",
		align: "left",
		size: "default",
		type: "incoming",
	},
});

interface MessageContextValue
	extends VariantProps<typeof chatMessageVariants> {}

const ChatMessageContext = React.createContext<MessageContextValue | null>(
	null,
);

const useChatMessage = () => {
	const context = React.useContext(ChatMessageContext);
	return context;
};

// Root component
interface ChatMessageProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof chatMessageVariants> {
	children?: React.ReactNode;
}

const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
	(
		{
			className,
			align = "left",
			variant = "default",
			size = "default",
			type = "incoming",
			children,
			...props
		},
		ref,
	) => {
		return (
			<ChatMessageContext.Provider value={{ align, variant, size, type }}>
				<div
					ref={ref}
					className={cn(
						chatMessageVariants({ variant, align, size, type, className }),
					)}
					{...props}
				>
					{children}
				</div>
			</ChatMessageContext.Provider>
		);
	},
);
ChatMessage.displayName = "ChatMessage";

// Avatar component

const chatMessageAvatarVariants = cva(
	"size-8 flex items-center rounded-full justify-center ring-1 shrink-0 bg-transparent overflow-hidden",
	{
		variants: {
			type: {
				incoming: "ring-border",
				outgoing: "ring-muted-foreground/30",
			},
		},
		defaultVariants: {
			type: "incoming",
		},
	},
);

interface ChatMessageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	imageSrc?: string;
	icon?: ReactNode;
}

const ChatMessageAvatar = React.forwardRef<
	HTMLDivElement,
	ChatMessageAvatarProps
>(({ className, icon: iconProps, imageSrc, ...props }, ref) => {
	const context = useChatMessage();
	const type = context?.type ?? "incoming";
	const icon =
		iconProps ?? (type === "incoming" ? <SparklesIcon /> : <UserIcon />);
	return (
		<div
			ref={ref}
			className={cn(chatMessageAvatarVariants({ type, className }))}
			{...props}
		>
			{imageSrc ? (
				<img src={imageSrc} alt="Avatar" className="size-full object-cover" />
			) : (
				<div className="translate-y-px [&_svg]:size-4 [&_svg]:shrink-0">
					{icon}
				</div>
			)}
		</div>
	);
});
ChatMessageAvatar.displayName = "ChatMessageAvatar";

// Content component

const chatMessageContentVariants = cva("flex flex-col", {
	variants: {
		variant: {
			default: "",
			bubble: "rounded-xl px-3 py-2",
			full: "",
		},
		type: {
			incoming: "",
			outgoing: "",
		},
		size: {
			sm: "text-sm",
			default: "text-base",
			lg: "text-lg",
		},
	},
	compoundVariants: [
		{
			variant: "bubble",
			type: "incoming",
			className: "bg-secondary text-secondary-foreground",
		},
		{
			variant: "bubble",
			type: "outgoing",
			className: "bg-primary text-primary-foreground",
		},
	],
	defaultVariants: {
		variant: "default",
		type: "incoming",
		size: "default",
	},
});

interface ChatMessageContentProps extends React.HTMLAttributes<HTMLDivElement> {
	id: string;
	content: string;
}

const ChatMessageContent = React.forwardRef<
	HTMLDivElement,
	ChatMessageContentProps
>(({ className, content, id, ...props }, ref) => {
	const context = useChatMessage();

	const variant = context?.variant ?? "default";
	const size = context?.size ?? "default";
	const type = context?.type ?? "incoming";

	return (
		<div
			ref={ref}
			className={cn(
				chatMessageContentVariants({ variant, type, size, className }),
			)}
			{...props}
		>
			<MarkdownContent id={id} content={content} />
		</div>
	);
});
ChatMessageContent.displayName = "ChatMessageContent";

export { ChatMessage, ChatMessageAvatar, ChatMessageContent };
