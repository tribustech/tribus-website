/**
 * Renders structured data as a <script type="application/ld+json"> tag.
 *
 * `<` is escaped to its unicode form to prevent the JSON-LD payload from
 * breaking out of the script tag (XSS hardening), per the Next.js JSON-LD guide.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
