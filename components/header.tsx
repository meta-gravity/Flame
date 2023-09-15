"use client";

import Themebutton from "@/components/Themebutton";
import { Button } from "@/components/ui/button";

export default function header() {
  return (
    <main>
      <div className="flex font-bold items-center justify-center p-3 text-center bg-grey-100 fw-50">
        <div className="font-bold">
          <Button
            type="submit"
            variant="link"
            className="hover:text-sky-500 font-semibold"
          >
            <a href="/">Home</a>
          </Button>
        </div>
        <div className="font-bold">
          <Button
            type="submit"
            variant="link"
            className="hover:text-sky-500 font-semibold"
          >
            <a href="/about">About</a>
          </Button>
        </div>
        <div className="font-bold">
          <Button
            type="submit"
            variant="link"
            className="hover:text-sky-500 font-semibold"
          >
            <a href="/chat">Chat</a>
          </Button>
        </div>
        <Themebutton />
      </div>
    </main>
  );
}
