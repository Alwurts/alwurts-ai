import type { Registry } from "./schema";

export const ui: Registry = [
	{
		name: "chat-input",
		type: "registry:ui",
		registryDependencies: ["textarea"],
		files: [
			{ type: "registry:ui", path: "ui/chat-input.tsx" },
			{ type: "registry:hook", path: "hooks/use-textarea-resize.ts" },
		],
	},
	{
		name: "chat-message-area",
		type: "registry:ui",
		registryDependencies: ["scroll-area", "button"],
		files: [
			{ type: "registry:ui", path: "ui/chat-message-area.tsx" },
			{ type: "registry:hook", path: "hooks/use-scroll-to-bottom.ts" },
		],
	},
	{
		name: "chat-message",
		type: "registry:ui",
		registryDependencies: [
			"https://simple-ai.alwurts.com/registry/markdown-content.json",
		],
		files: [{ type: "registry:ui", path: "ui/chat-message.tsx" }],
	},
	{
		name: "markdown-content",
		description: "A markdown content component.",
		type: "registry:ui",
		dependencies: ["react-markdown", "marked", "remark-gfm", "shiki"],
		files: [{ type: "registry:ui", path: "ui/markdown-content.tsx" }],
	},
	{
		name: "submit-button",
		type: "registry:ui",
		files: [{ type: "registry:ui", path: "ui/submit-button.tsx" }],
	},
];
