export default function SlugsPage({ params }: { params: { slug: string[] } }) {
  console.log("slugs>>>", params);
  return <>SlugsPage - {JSON.stringify(params.slug)}</>;
}
