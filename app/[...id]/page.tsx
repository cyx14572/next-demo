import Image from 'next/image'

export async function generateMetadata({ params }: any) {
  console.log(
    '%c [ params ]-4',
    'font-size:13px; background:pink; color:#bf2c9f;',
    params
  )
  const [, id, data] = params.id

  // 构建深度链接URL
  const deepLinkParams = new URLSearchParams({
    fromType: '4',
    type: '1001',
    parm1: id,
    book_type: '1',
    chapterId: data,
    ad_type: '',
  }).toString()

  // const deepLink = `cmsvictor://?${deepLinkParams}`
  // 写死
  const deepLink = `cmsvictor://?formType=2&amp;type=1001&amp;book_type=1&amp;parm1=661368cdf0edda7abe0a1c2d&amp;chapterId=i7e6ohlvz5&amp;af_deeplink=true&amp;af_dp=cmsvictor%3A%2F%2F%3FformType%3D2%26type%3D1001%26book_type%3D1%26parm1%3D661368cdf0edda7abe0a1c2d%26chapterId%3Di7e6ohlvz5&amp;af_generate_clk=true&amp;af_original_url=https%3A%2F%2Frealshortapp.onelink.me%2FZof7%3Faf_xp%3Dcustom%26pid%3Dtest%26c%3DCMS_APP_EXCHANGE_REELSHORT%26deep_link_value%3Dcmsvictor%253A%252F%252F%253FformType%253D2%2526type%253D1001%2526book_type%253D1%2526parm1%253D661368cdf0edda7abe0a1c2d%2526chapterId%253Di7e6ohlvz5%26af_dp%3Dcmsvictor%253A%252F%252F%253FformType%253D2%2526type%253D1001%2526book_type%253D1%2526parm1%253D661368cdf0edda7abe0a1c2d%2526chapterId%253Di7e6ohlvz5&amp;af_xp=custom&amp;c=CMS_APP_EXCHANGE_REELSHORT&amp;campaign=CMS_APP_EXCHANGE_REELSHORT&amp;deep_link_value=cmsvictor%3A%2F%2F%3FformType%3D2%26type%3D1001%26book_type%3D1%26parm1%3D661368cdf0edda7abe0a1c2d%26chapterId%3Di7e6ohlvz5&amp;media_source=test&amp;pid=test`
  return {
    title: id,
    description: data,
    other: {
      // iOS App Links
      'al:ios:url': deepLink,
      'al:ios:app_store_id': '1636235979',
      'al:ios:app_name': 'RealShort',

      // Android App Links
      'al:android:url': deepLink,
      'al:android:package': 'com.newleaf.app.android.victor',
      'al:android:app_name': 'RealShort',
    },
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
