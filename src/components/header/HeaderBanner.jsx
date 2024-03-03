export default function HeaderBanner() {
  return (
    <div className="bg-black z-50 relative max-h-[42.84px]">
      <div className="flex flex-col lg:flex-row justify-between mx-auto max-w-limit py-[10px]">
        <p className="text-white uppercase font-semibold">30% Off Sitewide OR MORE</p>
        <p className="text-white uppercase font-semibold">Free Shipping Orders Over $999</p>
        <p className="text-white font-medium"><a className="hover:underline" href="/financing">Buy now, pay later with <span>Affirm</span></a></p>
      </div>
    </div >
  )
}