import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function ContactPage() {
  // Read the README.md content
  const readmePath = path.join(process.cwd(), 'README.md');
  const readmeContent = fs.readFileSync(readmePath, 'utf8');

  return (
    <div className="prose max-w-none p-4 markdown-body">
        <div className="prose prose-invert max-w-none p-6 text-white">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {readmeContent}
            </ReactMarkdown>
        </div>
    </div>
  );
}
