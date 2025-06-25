// app/autores/[slug]/page.tsx

import { groq } from 'next-sanity';
import Image from 'next/image';
import { sanityClient, urlFor } from '../../../../lib/sanity';

// 1. Definimos o tipo de dados que esperamos do Sanity
type Author = {
  name: string;
  bio: any[]; // O campo bio é geralmente um array de blocos (Portable Text)
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
};

// 2. A query GROQ para buscar um autor específico pelo seu slug
const authorQuery = groq`
  *[_type == "author" && slug.current == $slug][0] {
    name,
    bio,
    image {
      asset->{_id, url},
      alt
    }
  }
`;

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const author: Author = await sanityClient.fetch(authorQuery, { slug });
    console.log('Author data:', author);
  if (!author) {
    // Se o autor não for encontrado, você pode renderizar uma página 404
    return <div>Autor não encontrado!</div>;
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {author.image && (
          <Image
            src={urlFor(author.image).width(150).height(150).url()}
            alt={author.image.alt || author.name}
            width={150}
            height={150}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
        <h1>{author.name}</h1>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        {/* Para renderizar o 'bio' (Portable Text), você precisará de um componente específico.
            Por enquanto, vamos deixar um placeholder. */}
        <h2>Sobre:</h2>
        <p>Aqui virá a biografia do autor. Renderizar o Portable Text requer o componente @portabletext/react.</p>
      </div>
    </div>
  );
}