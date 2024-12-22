import React from "react";

import { AUTHOR } from "@/site.config";

export default function ProjectOG({ title }: { title: string }) {
  return (
    <main
      tw="w-full h-full flex flex-col justify-start align-start p-14 box-border"
      style={{
        fontFamily: "Nothing",
        backgroundColor: "#121212",
        color: "#fafafa",
      }}
    >
      <div tw="flex text-4xl uppercase" style={{ color: "#a0a0a0" }}>
        Project
      </div>

      <div
        tw=" flex flex-1 mt-4"
        style={{
          width: "75%",
          fontFamily: "Departure Mono",
          fontSize: "77px",
        }}
      >
        {title}
      </div>

      <div
        tw="flex justify-end text-5xl uppercase"
        style={{ color: "#e1e1e1" }}
      >
        <span style={{ color: "#ff4400" }}>{AUTHOR.at(0)}</span>
        <span>{AUTHOR.slice(1)}</span>
      </div>
    </main>
  );
}
