import Link from "next/link";
import { Title } from "~/components/Title";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-6">
        <Link href={"/"} className="underline">
          <Title small />
        </Link>
      </div>
      {children}
    </div>
  );
}
