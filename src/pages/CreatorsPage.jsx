import creatorsData from "../data/creatorsData";
import CreatorCard from "../components/common/CreatorCard";

function CreatorsPage() {
  return (
    <section className="w-full pt-[40px] pb-[80px] md:pt-[56px] md:pb-[100px] lg:pt-[66px] lg:pb-[120px]">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
        <h1 className="mx-auto max-w-[260px] text-center text-[34px] font-[600] leading-[42px] text-[#141416] md:max-w-none md:text-[40px] md:leading-[48px] lg:text-[45px] lg:leading-[54px]">
          Meet Our Great Creators
        </h1>

        <div className="mt-[26px] grid grid-cols-1 gap-[22px] md:mt-[34px] md:grid-cols-3 md:gap-[20px] lg:mt-[42px] lg:grid-cols-3 lg:gap-[24px]">
          {creatorsData.map((item) => (
            <CreatorCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-[34px] flex justify-center md:mt-[42px] lg:mt-[54px]">
          <div className="h-[28px] w-[28px] animate-spin rounded-full border-[4px] border-[#D6D6D6] border-t-[#9B9B9B]" />
        </div>
      </div>
    </section>
  );
}

export default CreatorsPage;
