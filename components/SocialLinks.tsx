import Link from "next/link";
import { IconComponent, socialLinks } from "@/constants";

const SocialLinks = () => {
  return (
    <div className="-z-1 fixed top-36 mx-auto max-w-[1440px]">
      <div className="flex flex-col justify-center gap-8 p-4">
        {socialLinks.map((link) => {
          const IconObj = IconComponent[link.icon];
          if (!IconObj) {
            return null;
          } else {
            return (
              <Link
                key={link.id}
                href={link.url}
                title={link.title}
                className="rounded-full bg-gradient-to-r from-[#434343] to-[#000000] p-2"
              >
                {IconObj && (
                  <IconObj
                    className={`${link.className} text-[16px] md:text-[22px]`}
                    key={link.icon}
                  />
                )}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
