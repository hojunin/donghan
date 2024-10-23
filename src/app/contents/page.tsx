import React from "react";

import ContentCard from "@/components/contents/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contents | 김동한 개인 웹사이트",
  description: "김동한 개인 웹사이트입니다",
};

const DUMMY_CONTENTS = [
  { title: "컨텐츠 1", description: "설명 1", content: "컨텐츠 1" },
  { title: "컨텐츠 2", description: "설명 2", content: "컨텐츠 2" },
  { title: "컨텐츠 3", description: "설명 3", content: "컨텐츠 3" },
];

const ContentsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-40">
      <h2 className="text-4xl font-bold">컨텐츠 페이지</h2>

      <div className="grid grid-cols-4 gap-4 mt-10 w-full">
        {Array(50)
          .fill(DUMMY_CONTENTS)
          .flat()
          .map((content, content_index) => (
            <ContentCard
              key={`${content.title}_${content_index}`}
              {...content}
            />
          ))}
      </div>
    </div>
  );
};

export default ContentsPage;
