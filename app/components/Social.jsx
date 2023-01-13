import { GithubIcon, InstagramIcon, GmailIcon, TelegramIcon } from '.'

export default function Social ({ dark = false }) {
  return (
    <div className='flex items-center justify-center gap-4'>      
      <a href='' target='_blank' rel='norel' className={``}>
        <GithubIcon dark={dark} />
      </a>

      <a href='' target='_blank' rel='norel' className={``}>
        <InstagramIcon dark={dark} />
      </a>

      <a href='' target='_blank' rel='norel' className={``}>
        <GmailIcon dark={dark} />
      </a>

      <a href='' target='_blank' rel='norel' className={``}>
        <TelegramIcon dark={dark} />
      </a>
    </div>
  )
}