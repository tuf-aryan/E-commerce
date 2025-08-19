import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
    <div className="flex flex-col gap-4 ">
     <div>
      <Button variant="elevated">i a button</Button>
     </div>
     <div>
      <Input placeholder="i'm a input box"></Input>
     </div>
     <div>
      <Progress value={50}></Progress>
     </div>
     <div>
      <Textarea placeholder="i'm a text area"/>
     </div>
    </div>
    </div>
  );
}
