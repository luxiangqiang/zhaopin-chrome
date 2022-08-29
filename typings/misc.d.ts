
declare global {
  interface Window {
    $monitor: () => Promise<unknown>
  }
}