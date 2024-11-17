import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

export default function Cardcontainter() {
    const [notesCard, setNotesCard] = useState([]);
    console.log(notesCard);
    const onSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const notes = e.target.notes.value;
        setNotesCard([...notesCard, { title, notes }]);
    }
  return (
    <>
      <div className="flex justify-start p-10">
        <div>{/* Todo card goes here */}</div>
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <button>
                <Card className="w-72 h-64 flex justify-center items-center bg-inherit transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-zinc-900">
                  <span className="text-4xl">+</span>
                </Card>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add a new note</DialogTitle>
                <DialogDescription> 
                  Fill in the form below to add a new note.
                </DialogDescription>
              </DialogHeader>
                <form onSubmit={onSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 items-center gap-3">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter title"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 items-center gap-3">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter your notes"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
                </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
