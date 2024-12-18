import { ModeToggle } from "@/components/mode-toggle";
import { H1,H2,H3,H4,P } from "@/components/Typography";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between px-10 py-4">
            <H1>Todo Cards</H1>
            <div><ModeToggle></ModeToggle></div>
      </div>
    </>
  );
}
