import type { ReactNode } from "react"

interface SectonProps {
  children: ReactNode
}

function Section({children}: SectonProps) {
  return (
    <section className="lg:w-7xl mx-auto">
      {children}
    </section>
  )
}

export default Section
