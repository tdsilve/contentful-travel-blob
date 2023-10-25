import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export const RichText = ({ content }) => {
  return (
    <div className="prose mx-auto">{documentToReactComponents(content)}</div>
  );
};
