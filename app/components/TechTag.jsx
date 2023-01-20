import Image from 'next/image'

function TechTag ({
  name,
  url,
  color
}) {
  return (
    <div className={`flex items-center justify-center gap-2 text-sm md:text-base w-auto h-6 rounded-md p-2 md:p-3 capitalize font-semibold ${color}`}>
      <Image
        src={url}
        width={20}
        height={20}
        alt={`${name} logo`}
      />
      {name}
    </div>
  )
}

export default TechTag