export const PostTags = ({ tags }: { tags: string[] }) => {
  if (tags && tags.length == 0) {
    return null;
  }
  return (
    <div className="flex gap-2 text-sky-500 text-xs">
      {tags.map((tag, index) => {
        return <span key={index}>#{tag}</span>;
      })}
    </div>
  );
};
