import { useCursorGlow } from '@/hooks/useAnimations'

export function CursorGlow() {
  const { position, isVisible } = useCursorGlow()

  return (
    <div
      className="cursor-glow pointer-events-none hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        opacity: isVisible ? 1 : 0,
      }}
    />
  )
}