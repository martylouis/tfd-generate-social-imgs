export default function SidebarHeader() {
  return (
    <div className="flex flex-col items-center py-4">
      <div className="border border-pink-500 text-gray-700 inline-flex mx-auto items-center h-[32px] px-2">
        <h1 className="w-full text-xl font-black tracking-[-0.025rem] uppercase">
          The Freelance Dance
        </h1>
      </div>
      <div className="mt-2">
        <p className="tracking-wide uppercase">Image Generator</p>
      </div>
    </div>
  );
}
