import { Header } from "~/components/Header";
import { Posts } from "~/components/Posts";

export default function Home() {
  return (
    <main>
      <Header />
      <Posts className="mt-9" />
    </main>
  );
}
