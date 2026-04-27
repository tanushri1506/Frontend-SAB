import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="max-w-xl w-full p-8 text-center shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-[#091c53] mb-4">
          Certificate Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          This certificate link is invalid, inactive, or unavailable.
        </p>
        <Button asChild className="bg-[#091c53] hover:bg-[#0f2b81]">
          <Link href="/">Go to SAB Home</Link>
        </Button>
      </Card>
    </div>
  );
}