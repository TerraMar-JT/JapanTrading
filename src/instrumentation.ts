export function register() {
  if (typeof window === "undefined" && typeof localStorage !== "undefined") {
    // Node.js 22+ exposes a global localStorage that lacks working methods
    // unless --localstorage-file is set. Remove it so SSR code that guards
    // with `typeof localStorage !== 'undefined'` correctly skips the call.
    // @ts-expect-error — intentionally removing the broken global
    delete globalThis.localStorage;
  }
}
