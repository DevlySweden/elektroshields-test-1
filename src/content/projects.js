const toAssetUrl = (path) => new URL(path.replace('/src', '..'), import.meta.url).href

const projects = {
  sectionTitle: 'Projekt',
  sectionText:
    'Ett urval av vad vi levererar. Vi kan fylla pA med fler case och riktiga bilder.',
  items: [
    {
      title: 'SkArmning av teknikrum',
      desc: 'Planering och montage med fokus pA finish och servicebarhet.',
      imagePath: '/src/assets/projects/p1.jpg',
      imageUrl: toAssetUrl('/src/assets/projects/p1.jpg'),
    },
    {
      title: 'EMC-anpassning i anlAggning',
      desc: 'A.tgArder fAr att minska stArningar och sAkra drift.',
      imagePath: '/src/assets/projects/p2.jpg',
      imageUrl: toAssetUrl('/src/assets/projects/p2.jpg'),
    },
    {
      title: 'Installation & dokumentation',
      desc: 'Tydlig Aterrapportering och ordning i detaljerna.',
      imagePath: '/src/assets/projects/p3.jpg',
      imageUrl: toAssetUrl('/src/assets/projects/p3.jpg'),
    },
  ],
}

export default projects
