export type Song = {
  id: number
  title: string
  preview: string
  link: string

  artist: {
    name: string
  }

  album: {
    title: string
    cover_medium: string
  }
}