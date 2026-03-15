# VueUse

Prefer VueUse composables over manual DOM and browser API usage. `@vueuse/nuxt` is installed and auto-imports all composables — no explicit imports needed.

## When to reach for VueUse first

| Instead of... | Use |
|---|---|
| `window.addEventListener('scroll', ...)` | `useWindowScroll()` |
| `window.addEventListener('resize', ...)` | `useWindowSize()` |
| `window.addEventListener('focus/blur', ...)` | `useWindowFocus()` |
| `document.getElementById / querySelector` | `useTemplateRef()` (Vue built-in) or `templateRef()` |
| `localStorage.getItem/setItem` | `useLocalStorage()` |
| `import.meta.client` guards around DOM calls | VueUse composables are SSR-safe by default |
| `setInterval` / `setTimeout` | `useIntervalFn()` / `useTimeoutFn()` |
| `navigator.clipboard` | `useClipboard()` |
| `matchMedia(...)` | `useMediaQuery()` / `useBreakpoints()` |
| `IntersectionObserver` | `useIntersectionObserver()` |
| `ResizeObserver` | `useResizeObserver()` |

## SSR safety

VueUse composables handle SSR gracefully — they return safe defaults on the server and activate on the client. This eliminates the need for `import.meta.client` guards around browser API calls.

## Reference

Full function list: https://vueuse.org/functions.html
