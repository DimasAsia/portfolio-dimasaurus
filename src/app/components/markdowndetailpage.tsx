import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function MarkdownTheme({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ ...props }) => (
          <h1 className="mt-10 mb-4 text-4xl font-bold tracking-tight" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2 className="mt-8 mb-3 text-2xl font-semibold tracking-tight" {...props} />
        ),
        h3: ({ ...props }) => (
          <h3 className="mt-6 mb-2 text-xl font-semibold" {...props} />
        ),
        p: ({ ...props }) => (
          <p className="my-4 leading-relaxed text-muted-foreground" {...props} />
        ),
        ul: ({ ...props }) => (
          <ul className="my-4 list-disc space-y-2 pl-6" {...props} />
        ),
        ol: ({ ...props }) => (
          <ol className="my-4 list-decimal space-y-2 pl-6" {...props} />
        ),
        li: ({ ...props }) => (
          <li className="leading-relaxed" {...props} />
        ),
        blockquote: ({ ...props }) => (
          <blockquote className="my-6 border-l-4 border-muted pl-4 italic text-muted-foreground" {...props} />
        ),
        code: ({ node, children, ...props }) =>
          node ? (
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm" {...props}>
              {children}
            </code>
          ) : (
            <pre className="my-6 overflow-x-auto rounded-xl bg-black p-4 text-sm text-white">
              <code>{children}</code>
            </pre>
          ),
        hr: () => <hr className="my-10 border-muted" />,
        img: ({ ...props }) => (
  <img
    className="my-8 rounded-xl object-center border shadow-sm"
    {...props}
    alt=""
  />
),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}