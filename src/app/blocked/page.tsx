import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function BlockedPage(props: any) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Access Blocked</h1>

      <p className="mb-6 text-lg">{JSON.stringify(props.searchParams)}</p>

      <Link href={"mailto:demirtasdurmus@gmail.com"}>
        <Button variant="secondary">Contact</Button>
      </Link>
    </div>
  );
}
