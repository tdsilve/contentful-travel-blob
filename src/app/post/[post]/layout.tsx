import { BlogTitleLinkToHome } from "~/components/index";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-6 text-center">
        <BlogTitleLinkToHome small={true} />
      </div>
      {children}
    </div>
  );
}
