export default function HeaderBanner() {
  return (
    <div className="bg-black">
      <div className="flex flex-col lg:flex-row justify-between mx-auto max-w-limit py-[10px]">
        <div className="text-white uppercase font-semibold">30% Off Sitewide OR MORE</div>
        <div className="text-white uppercase font-semibold">Free Shipping Orders Over $999</div>
        <div className="text-white font-medium"><a href="/financing">Buy now, pay later with <span>Affirm</span></a></div>
      </div>
    </div >
  )
}