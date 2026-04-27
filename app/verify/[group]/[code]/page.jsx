import CertificatePageClient from "./CertificatePageClient";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { group, code } = resolvedParams;

  return <CertificatePageClient group={group} code={code} />;
}