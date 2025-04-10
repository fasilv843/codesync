import { Button } from "@/components/ui/button";
import {
  SignInButton
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      <SignInButton>
        <Button>Log In</Button>
      </SignInButton>
    </div>
  );
}
