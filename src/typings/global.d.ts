import type * as tauri from '@tauri-apps/api'
declare const Tauri: typeof tauri
declare global {
  interface Window {
    Tauri: Tauri
  }
}