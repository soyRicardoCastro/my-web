import Image from 'next/image'

export default function ProjectImagesPreview ({
  urlDesktop,
  urlMobile,
  name
}) {

  return (
    <div className='relative overflow-hidden flex items-center justify-center h-[200px] w-[96%] md:min-w-full md:h-26 mx-auto bg-gray-700/30 rounded-md p-2'>
      <Image
        width={500}
        height={175}
        src={urlDesktop}
        className='min-w-full h-[195%] [object-fit:contain]'
        alt={`${name} preview in Desktop`}
      />

      <Image
        width={85}
        height={185}
        src={urlMobile}
        className='absolute left-14 h-[220px] w-auto'
        alt={`${name} preview in Mobile`}
      />
    </div>
  )
}
