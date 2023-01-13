export default function Logo ({ dark = false }) {
  return (
    <div className={`flex items-center justify-center  rounded-md p-1 ${dark ? 'text-black border border-red-200' : 'border text-gray-200 border-gray-200'}`}>
      <img src="/logo.png" className="w-[40px]" />

      <h3 className="text-2xl font-black [letter-spacing:4px]">RC</h3>
    </div>
  )
}