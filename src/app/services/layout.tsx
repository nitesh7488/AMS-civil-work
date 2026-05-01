// src/app/services/layout.tsx
// NOTE: Do NOT set canonical here — it leaks to child routes like /services/[slug]
// Each page sets its own canonical via generateMetadata or a dedicated metadata export.

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
