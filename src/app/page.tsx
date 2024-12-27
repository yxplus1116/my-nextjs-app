"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"


import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import { Input } from '@/components/ui/input'
// import { useToast } from "@/hooks/use-toast"

export default function Home() {
  // const { toast } = useToast()
  const sentences = [
    "我有一个朋友他是个奇怪的人",
    "每天看起来挺开心的",
    "但实际却在经常emo",
    "经常很晚才睡觉",
    "他会莫名其妙情绪低落总是胡思乱想",
    "他永远都停止不了自己的精神内耗!",
    "他是个矛盾体;",
    "时而自卑，",
    "时而自信，",
    "焦虑又敏感!",
    "他这个人也很奇怪?",
    "他喜欢社交，可是他又社恐? !",
    "也很冷漠、也很无聊? !",
    "发呆时眼睛会盯着一处发呆",
    "他应该是有很多烦恼",
    "他讨厌酒的味道却喜欢酒精麻痹的感觉!",
    "他面对别人的感情就像情感导师一样什么都懂!",
    "但是到他自己身上的感情真的太坎坷了…",
    "他既乐观又悲观生活也一无是处我很想找到...",
    "救赎他的办法。",
    "到头来...",
    "你看他们都在幸福啊而你呢？"
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}
        <h1 className="text-xl font-black">这城市夜晚的风很大</h1>
        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {
            sentences.map((item, index) => (
              <p

                data-title={item}
                key={index}
                className="leading-relaxed sentences_item"
                style={{
                  '--i': index,
                  zIndex: sentences.length - index,
                } as React.CSSProperties}
              >
                {item}
              </p>
            ))
          }
        </div>
        <ToggleGroup type="multiple" defaultValue={['one', 'two', 'three']}>
          <ToggleGroupItem value="one" aria-label="Toggle one" >
            <code>有要爱的人</code>
          </ToggleGroupItem>
          <ToggleGroupItem value="two" aria-label="Toggle two" >
            <code>有要做的事</code>
          </ToggleGroupItem>
          <ToggleGroupItem value="three" aria-label="Toggle three" >
            <code>有寄予希望的东西</code>
          </ToggleGroupItem>
        </ToggleGroup>
        {/* 斜体加粗 */}
        <div className="underline underline-offset-2 font-bold italic list-inside list-decimal text-base text-center sm:text-left font-[family-name:var(--font-geist-sans)]">时至如今 我非常讨厌和反感不真诚的人</div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* <Button
            onClick={() => {
              toast({
                title: "Uh oh! Something went wrong.",
                description: "不如不相见.",
              })
            }}
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={15}
              height={15}
            />
            <span>我正在为这件事烦恼</span>
          </Button> */}
          <Dialog>
            <DialogTrigger asChild>
              <div>
                <Button
                >
                  <Image
                    className="dark:invert"
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={15}
                    height={15}
                  />
                  <span>我正在为这件事烦恼</span>
                </Button>
                <div className="flex flex-col items-center pt-4">
                  <span className="text-gray-500 text-sm">end.</span>
                  <span className="text-gray-500 text-sm">倒霉熊</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>写出你的烦恼</DialogTitle>
                <DialogDescription>
                  每个人的世界都会下雨 总有一把伞是为你而撑
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Input id="link" />
                  <Image
                    src="/wechat.jpg"  // 图片路径
                    alt="描述文本"                  // 图片的替代文本
                    width={500}                    // 图片宽度
                    height={300}                   // 图片质量（可选）
                  />
                </div>
              </div>
              <DialogFooter className="justify-start">
                <DialogClose asChild>
                  <Button type="submit" variant="secondary">
                    我要宣泄
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>


          {/* <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a> */}
          {/* <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a> */}
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
