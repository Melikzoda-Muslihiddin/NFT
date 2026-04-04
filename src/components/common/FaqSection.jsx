import { Collapse } from "antd";
import { useNavigate } from "react-router-dom";

const faqItems = [
  {
    key: "1",
    label: "What is an NFT?",
    children: (
      <p className="text-[15px] leading-[26px] text-[#646464]">
        NFT is a unique digital asset that represents ownership of a specific
        item or piece of content on the blockchain.
      </p>
    ),
  },
  {
    key: "2",
    label: "What can I use NFTs for?",
    children: (
      <p className="text-[15px] leading-[26px] text-[#646464]">
        NFTs can be used for digital art, collectibles, memberships, gaming
        items, and other blockchain-based ownership use cases.
      </p>
    ),
  },
  {
    key: "3",
    label: "What is the difference between an NFT and cryptocurrency?",
    children: (
      <p className="text-[15px] leading-[26px] text-[#646464]">
        Cryptocurrency is fungible, meaning each unit is the same. NFTs are
        non-fungible, which means each one is unique.
      </p>
    ),
  },
  {
    key: "4",
    label: "How much is an NFT worth?",
    children: (
      <p className="text-[15px] leading-[26px] text-[#646464]">
        The value of an NFT depends on rarity, demand, creator reputation,
        utility, and market activity.
      </p>
    ),
  },
  {
    key: "5",
    label: "How do I purchase an NFT on your platform ?",
    children: (
      <p className="text-[15px] leading-[26px] text-[#646464]">
        You choose an NFT, open its detail page, connect your wallet, and place
        a bid or complete the purchase.
      </p>
    ),
  },
];

function FaqSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full pt-[80px] pb-[90px] md:pt-[100px] md:pb-[110px] lg:pt-[120px] lg:pb-[140px]">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
        <div className="text-center">
          <h2 className="text-[34px] font-[600] leading-[42px] text-[#141416] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px]">
            Frequently Asked
          </h2>
          <h3 className="text-[34px] font-[600] leading-[42px] text-[#C5C5C5] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px]">
            Questions
          </h3>
        </div>

        <div className="mt-[36px] md:mt-[46px] lg:mt-[58px]">
          <Collapse
            accordion
            ghost
            expandIconPosition="end"
            items={faqItems}
            className="faq-collapse"
          />
        </div>

        <div className="mt-[70px] overflow-hidden rounded-[24px] bg-[#141416] px-[24px] pt-[28px] pb-[0px] shadow-[0px_20px_50px_rgba(20,22,22,0.18)] md:mt-[90px] md:px-[34px] md:pt-[36px] lg:mt-[110px] lg:flex lg:items-center lg:justify-between lg:rounded-[30px] lg:px-[56px] lg:py-[34px]">
          <div className="lg:max-w-[460px]">
            <h4 className="text-center text-[30px] font-[600] leading-[38px] text-white md:text-[38px] md:leading-[46px] lg:text-left lg:text-[48px] lg:leading-[58px]">
              Create and Sell NFTs
            </h4>

            <p className="mt-[8px] text-center text-[14px] leading-[22px] text-[#D4D4D4] md:text-[16px] md:leading-[24px] lg:text-left lg:text-[18px] lg:leading-[28px]">
              World’s Largest NFT Place
            </p>

            <div className="mt-[22px] flex flex-wrap items-center justify-center gap-[12px] md:mt-[28px] lg:justify-start">
              <button
                onClick={() => navigate("/discover")}
                className="h-[48px] rounded-[12px] bg-white px-[18px] text-[14px] font-[600] text-[#141416] md:h-[52px] md:px-[22px]"
              >
                Explore More
              </button>

              <button className="h-[48px] rounded-[12px] border border-white bg-transparent px-[18px] text-[14px] font-[600] text-white md:h-[52px] md:px-[22px]">
                Sell Artwork
              </button>
            </div>
          </div>

          <div className="relative mt-[28px] flex justify-center lg:mt-[0] lg:w-[420px] lg:justify-end">
            <div className="absolute left-[50%] top-[50%] h-[180px] w-[180px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[rgba(132,255,237,0.18)] blur-[45px] md:h-[220px] md:w-[220px] lg:h-[240px] lg:w-[240px]" />

            <img
              src="/images/card2.png"
              alt="NFT"
              className="relative z-[2] h-[200px] w-full max-w-[330px] rounded-[18px] object-cover md:h-[240px] md:max-w-[420px] lg:h-[250px] lg:w-[320px] lg:max-w-none lg:rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
