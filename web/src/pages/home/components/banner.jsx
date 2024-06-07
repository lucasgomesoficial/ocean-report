import banner from "../../../assets/images/banner.png";

export function Banner() {
  return (
    <div className="flex mt-8 px-72 justify-center items-center gap-36">
      <div>
        <img className="max-w-xl" src={banner} alt="ilustração-oceano" />
      </div>
    </div>
  );
}
