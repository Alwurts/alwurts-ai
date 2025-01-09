// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Index: Record<string, any> = {
	"chat-input": {
		name: "chat-input",
		description: "",
		type: "registry:ui",
		registryDependencies: ["textarea"],
		files: [{
			path: "src/registry/ui/chat-input.tsx",
			type: "registry:ui",
			target: ""
		},{
			path: "src/registry/hooks/use-textarea-resize.ts",
			type: "registry:hook",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/chat-input.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-area": {
		name: "chat-message-area",
		description: "",
		type: "registry:ui",
		registryDependencies: ["scroll-area","button"],
		files: [{
			path: "src/registry/ui/chat-message-area.tsx",
			type: "registry:ui",
			target: ""
		},{
			path: "src/registry/hooks/use-scroll-to-bottom.ts",
			type: "registry:hook",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/chat-message-area.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message": {
		name: "chat-message",
		description: "",
		type: "registry:ui",
		registryDependencies: ["https://ai.alwurts.com/registry/markdown-content.json"],
		files: [{
			path: "src/registry/ui/chat-message.tsx",
			type: "registry:ui",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/chat-message.tsx")),
		source: "",
		meta: undefined,
    },	"markdown-content": {
		name: "markdown-content",
		description: "",
		type: "registry:ui",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/ui/markdown-content.tsx",
			type: "registry:ui",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/markdown-content.tsx")),
		source: "",
		meta: undefined,
    },	"submit-button": {
		name: "submit-button",
		description: "",
		type: "registry:ui",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/ui/submit-button.tsx",
			type: "registry:ui",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/ui/submit-button.tsx")),
		source: "",
		meta: undefined,
    },	"chat-demo": {
		name: "chat-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-input-demo": {
		name: "chat-input-demo",
		description: "",
		type: "registry:example",
		registryDependencies: ["https://ai.alwurts.com/registry/chat-input.json"],
		files: [{
			path: "src/registry/examples/chat-input-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-input-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-input-unstyled": {
		name: "chat-input-unstyled",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-input-unstyled.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-input-unstyled.tsx")),
		source: "",
		meta: undefined,
    },	"chat-input-unstyled-initial-rows": {
		name: "chat-input-unstyled-initial-rows",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-input-unstyled-initial-rows.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-input-unstyled-initial-rows.tsx")),
		source: "",
		meta: undefined,
    },	"markdown-content-demo": {
		name: "markdown-content-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/markdown-content-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/markdown-content-demo.tsx")),
		source: "",
		meta: undefined,
    },	"markdown-streaming-demo": {
		name: "markdown-streaming-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/markdown-streaming-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/markdown-streaming-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo": {
		name: "chat-message-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-default": {
		name: "chat-message-demo-default",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-default.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-default.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-bubble": {
		name: "chat-message-demo-bubble",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-bubble.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-bubble.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-full": {
		name: "chat-message-demo-full",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-full.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-full.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-without-avatar": {
		name: "chat-message-demo-without-avatar",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-without-avatar.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-without-avatar.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-avatar-image": {
		name: "chat-message-demo-avatar-image",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-avatar-image.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-avatar-image.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-demo-markdown-content": {
		name: "chat-message-demo-markdown-content",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-demo-markdown-content.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-demo-markdown-content.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-area-demo": {
		name: "chat-message-area-demo",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-area-demo.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-area-demo.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-area-demo-alignment": {
		name: "chat-message-area-demo-alignment",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-area-demo-alignment.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-area-demo-alignment.tsx")),
		source: "",
		meta: undefined,
    },	"chat-message-area-demo-streaming": {
		name: "chat-message-area-demo-streaming",
		description: "",
		type: "registry:example",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/examples/chat-message-area-demo-streaming.tsx",
			type: "registry:example",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/examples/chat-message-area-demo-streaming.tsx")),
		source: "",
		meta: undefined,
    },	"use-textarea-resize": {
		name: "use-textarea-resize",
		description: "",
		type: "registry:hook",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/hooks/use-textarea-resize.ts",
			type: "registry:hook",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/hooks/use-textarea-resize.ts")),
		source: "",
		meta: undefined,
    },	"use-scroll-to-bottom": {
		name: "use-scroll-to-bottom",
		description: "",
		type: "registry:hook",
		registryDependencies: undefined,
		files: [{
			path: "src/registry/hooks/use-scroll-to-bottom.ts",
			type: "registry:hook",
			target: ""
		}],
		categories: undefined,
		component: React.lazy(() => import("@/registry/hooks/use-scroll-to-bottom.ts")),
		source: "",
		meta: undefined,
    },
}
