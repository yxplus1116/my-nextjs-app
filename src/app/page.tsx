"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

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
  const router = useRouter()
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
                <Button
                  onClick={() => {
                    router.push('/ip');
                  }}
                  className="ml-4"
                >

                  <span>IP 信息</span>
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



        </div>
      </main>

    </div>
  );
}
