import { TitleLinkToHome } from "~/components/BlogTitle";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-6">
        <TitleLinkToHome small={true} />
      </div>
      {children}
    </div>
  );
}
