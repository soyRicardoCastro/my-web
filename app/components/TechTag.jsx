import Image from 'next/image'

function TechTag ({
  name = "React",
  url = "/logos/react.svg",
  color = "bg-sky-600"
}) {
  return (
    <div className={`flex items-center justify-center gap-2 text-sm w-auto h-6 rounded-md p-2 capitalize font-semibold ${color}`}>
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