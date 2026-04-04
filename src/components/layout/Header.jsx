import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const languages = ['en', 'ru', 'tj']

  return (
    <div className="hidden items-center gap-[6px] lg:flex">
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => i18n.changeLanguage(language)}
          className={`h-[32px] rounded-[10px] px-[10px] text-[11px] font-[700] uppercase transition ${
            i18n.language === language
              ? 'bg-[#141416] text-white'
              : 'border border-[#E6E8EC] bg-white text-[#606060]'
          }`}
        >
          {language}
        </button>
      ))}
    </div>
  )
}

function Header({ cardsSectionRef }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navLinks = [
    { id: 1, title: t('header.discover'), path: '/discover' },
    { id: 2, title: t('header.creators'), path: '/creators' },
    { id: 3, title: t('header.sell'), path: '/add' },
    { id: 4, title: t('header.stats'), path: '/' },
  ]

  const handleScrollToCards = () => {
    if (cardsSectionRef?.current) {
      cardsSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      setIsOpen(false)
    }
  }

  return (
    <header className="w-full border-b border-[#E6E8EC] bg-[#FCFCFD]">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
        <div className="flex h-[67px] items-center justify-between md:h-[88px] lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link to="/" className="justify-self-start">
            <img
              src="/images/logo.svg"
              alt="DiveSea"
              className="h-[28px] w-auto object-contain md:h-[32px] lg:h-[33px]"
            />
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-[32px]">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="text-[14px] font-[600] leading-[21px] text-[#606060] transition duration-200 hover:text-[#141416]"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-self-end gap-[12px] md:flex">
            <button
              onClick={handleScrollToCards}
              className="h-[48px] rounded-[14px] border border-[#E6E8EC] bg-[#F4F5F6] px-[18px] text-[13px] font-[500] leading-[20px] text-[#B1B5C3] transition duration-200 hover:bg-[#ECEEF2] md:px-[20px] lg:w-[220px] lg:text-left"
            >
              {t('header.searchScroll')}
            </button>

            <LanguageSwitcher />

            <Link
              to="/profile"
              className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#E6E8EC] bg-white transition duration-200 hover:bg-[#F4F5F6]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="#23262F"
                  strokeWidth="1.8"
                />
                <path
                  d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
                  stroke="#23262F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#E6E8EC] bg-white md:h-[44px] md:w-[44px] lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 7H20" stroke="#141416" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="#141416" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 17H20" stroke="#141416" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-[#E6E8EC] py-[20px] lg:hidden">
            <div className="flex flex-col gap-[16px]">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-[14px] font-[600] leading-[20px] text-[#606060]"
                >
                  {link.title}
                </Link>
              ))}

              <button
                onClick={handleScrollToCards}
                className="mt-[4px] h-[46px] rounded-[14px] border border-[#E6E8EC] bg-[#F4F5F6] px-[16px] text-left text-[13px] font-[500] leading-[20px] text-[#B1B5C3]"
              >
                {t('header.searchScroll')}
              </button>

              <div className="flex gap-[8px]">
                {['en', 'ru', 'tj'].map((language) => (
                  <button
                    key={language}
                    onClick={() => i18n.changeLanguage(language)}
                    className="h-[38px] rounded-[12px] border border-[#E6E8EC] bg-white px-[12px] text-[12px] font-[700] uppercase text-[#606060]"
                  >
                    {language}
                  </button>
                ))}
              </div>

              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="flex h-[46px] items-center justify-center rounded-[16px] border border-[#E6E8EC] bg-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    stroke="#23262F"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
                    stroke="#23262F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
