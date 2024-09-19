import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>1. 添加 demo1 为默认路由</div>
        <div>
          2. 设置路由,使得不管从哪个页面进入网页都默认跳转到 demo1 页
          (middleware.ts)
        </div>
        <div>3. 完善 demo1/page.tsx</div>
      </main>
    </div>
  );
}
