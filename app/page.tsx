import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high quality{" "}
          <span className="text-blue-600">digital assets</span>
        </h1>
        <p className="text-lg mb-6 max-w-prose text-muted-foreground">
          Welcome to Digital. Every asser on our platform is verified by our
          team to ensure the highest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/products">Browse Trending</Link>
          <div>asdasd</div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
