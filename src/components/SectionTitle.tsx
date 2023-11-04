export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center h-[50px]">
      <Line />
      <h4 className="text text-center border border-gray-300 w-fit text-gray-500 p-3 m-2 capitalize">
        {title}
      </h4>
      <Line />
    </div>
  );
};

const Line = () => {
  return <div className="border-[.5px] border-[#d9d9d9] flex-grow"></div>;
};
