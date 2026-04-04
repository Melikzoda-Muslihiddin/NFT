import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  const footerLinks = [
    { id: 1, title: t('footer.privacyPolicy'), path: '/' },
    { id: 2, title: t('footer.terms'), path: '/' },
    { id: 3, title: t('footer.aboutUs'), path: '/' },
    { id: 4, title: t('footer.contact'), path: '/' },
  ]

  const socialLinks = [
    {
      id: 1,
      name: 'Instagram',
      path: 'https://www.instagram.com/mel1kow.l8/',
      icon: (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.375 0.875H5.625C2.93461 0.875 0.75 3.05961 0.75 5.75V15.5C0.75 18.1904 2.93461 20.375 5.625 20.375H15.375C18.0654 20.375 20.25 18.1904 20.25 15.5V5.75C20.25 3.05961 18.0654 0.875 15.375 0.875Z" stroke="#777E90" strokeWidth="1.8" />
          <path d="M14.4 9.76031C14.5204 10.5721 14.3816 11.4013 14.0035 12.1301C13.6255 12.8588 13.0274 13.4508 12.2948 13.8214C11.5622 14.1921 10.7316 14.3224 9.92106 14.194C9.11055 14.0656 8.36097 13.6849 7.77922 13.106C7.19748 12.5271 6.81316 11.7793 6.68075 10.9694C6.54834 10.1596 6.67456 9.32834 7.04168 8.59394C7.4088 7.85953 7.99787 7.25847 8.72476 6.87693C9.45166 6.49539 10.2802 6.35246 11.0925 6.46875C11.921 6.58731 12.688 6.96913 13.2808 7.55821C13.8735 8.14729 14.2601 8.91188 14.3838 9.73969L14.4 9.76031Z" stroke="#777E90" strokeWidth="1.8" />
          <path d="M15.8625 5.2625H15.8787" stroke="#777E90" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="mt-[80px] w-full bg-[#141416]">
      <div className="mx-auto max-w-[1440px] px-[24px] pb-[32px] pt-[48px] md:px-[40px] md:pb-[40px] md:pt-[56px] lg:px-[96px] lg:pb-[81px] lg:pt-[92px]">
        <div className="flex flex-col gap-[32px] md:gap-[40px] lg:flex-row lg:items-center lg:justify-between lg:gap-[24px]">
          <a href="/" className="flex items-center">
            <img src="/images/footer-logo.svg" alt="DiveSea" className="h-[36px] w-auto object-contain md:h-[40px] lg:h-[46px]" />
          </a>

          <nav className="flex flex-col gap-[24px] md:flex-row md:flex-wrap md:gap-x-[36px] md:gap-y-[20px] lg:flex-nowrap lg:items-center lg:gap-[70px]">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className="text-[16px] font-[500] uppercase leading-[24px] text-[#B9B9BA] transition duration-200 hover:text-white md:text-[17px] md:leading-[26px] lg:text-[17px] lg:normal-case lg:leading-[26px]"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-[32px] h-[1px] w-full bg-[rgba(129,129,129,0.25)] md:mt-[36px] lg:mt-[25px]" />

        <div className="flex flex-col-reverse gap-[28px] pt-[28px] md:pt-[36px] lg:flex-row lg:items-center lg:justify-between lg:pt-[57px]">
          <p className="text-[14px] font-[500] leading-[22px] text-[#999999] md:text-[16px] md:leading-[24px] lg:text-[17px] lg:leading-[25px]">
            {t('footer.rights')}
          </p>

          <div className="flex items-center gap-[22px] md:gap-[24px] lg:gap-[26px]">
            {socialLinks.map((item) => (
              <a key={item.id} href={item.path} target="_blank" rel="noreferrer" aria-label={item.name} className="transition duration-200 hover:opacity-80">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
