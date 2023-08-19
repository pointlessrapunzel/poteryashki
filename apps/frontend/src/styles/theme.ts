export function matchesMdMq() {
  return (
    typeof window !== undefined &&
    window.matchMedia(`(min-width: 768px)`).matches
  )
}
