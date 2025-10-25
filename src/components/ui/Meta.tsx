import { Helmet } from 'react-helmet-async'

interface MetaProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
}

const Meta = ({
  title = 'Billig Bokföring - Din personliga redovisningskonsult',
  description = 'Kostnadseffektiv bokföring och redovisning för småföretag. Få professionell hjälp med din bokföring till ett fast pris.',
  keywords = 'bokföring, redovisning, småföretag, bokföringsbyrå, ekonomi',
  ogImage = '/og-image.jpg',
  ogUrl = 'https://billigbokforing.se'
}: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={ogUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={ogUrl} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={ogImage} />
    </Helmet>
  )
}

export default Meta
