import { TitleLinkToHome } from "~/components/Title";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-6">
        <TitleLinkToHome small />
      </div>
      {children}
    </div>
  );
}
