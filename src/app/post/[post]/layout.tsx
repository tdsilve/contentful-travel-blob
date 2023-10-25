import { Title } from "~/components/Title";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-6">
        <Title small />
      </div>
      {children}
    </div>
  );
}
