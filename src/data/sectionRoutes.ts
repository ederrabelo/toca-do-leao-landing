export const sectionRoutes = {
  horarios: { title: 'Horários', target: 'horarios' },
  planos: { title: 'Planos', target: 'planos' },
  localizacao: { title: 'Localização', target: 'contato' },
} as const

export type SectionRoute = {
  slug: keyof typeof sectionRoutes
  title: string
  target: string
}
