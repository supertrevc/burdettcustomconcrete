/**
 * Renders structured data as a JSON-LD <script>. JSON.stringify does not
 * escape HTML, so we replace "<" with its unicode escape to prevent XSS.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
