import ContentCard from "@/components/contents/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | 김동한 개인 웹사이트",
  description: "김동한 개인 웹사이트입니다",
};

export default function Home() {
  return (
    <main className="flex flex-col w-full px-4 md:px-20 lg:px-40 mb-20">
      <section className="flex flex-col items-center justify-center h-1/2 rounded-3xl bg-slate-200 mt-12">
        <Input
          type="text"
          placeholder="컨텐츠 검색"
          className="w-full md:w-3/4 lg:w-1/2 h-16 p-4 mb-5 border border-gray-300 rounded-full"
        />
        <div className="flex flex-wrap justify-around w-full md:w-3/4 lg:w-1/2">
          <Button className="px-4 py-2 m-1 rounded-full">컨텐츠 추가</Button>
          <Button className="px-4 py-2 m-1 rounded-full">컨텐츠 삭제</Button>
          <Button className="px-4 py-2 m-1 rounded-full">컨텐츠 수정</Button>
          <Button className="px-4 py-2 m-1 rounded-full">컨텐츠 조회</Button>
        </div>
      </section>

      <section className="flex flex-col">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">리스트</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 w-full">
          {DUMMY_CONTENTS.map((content) => (
            <ContentCard key={content.title} {...content} />
          ))}
        </div>
      </section>
    </main>
  );
}

const DUMMY_CONTENTS = [
  {
    title: "콘텐츠 1번",
    description: "설명 1",
    content: "컨텐츠 1",
  },
  {
    title: "콘텐츠 2번",
    description: "설명 2",
    content: "컨텐츠 2",
  },
  {
    title: "콘텐츠 3번",
    description: "설명 3",
    content: "컨텐츠 3",
  },
  {
    title: "콘텐츠 4번",
    description: "설명 4",
    content: "컨텐츠 4",
  },
];
