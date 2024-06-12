import { Badge, Banner } from "flowbite-react";
import type { FC } from "react";
import { MdFiberNew } from "react-icons/md";

const AnnouncementBanner: FC = function () {
  return (
    <Banner>
      <div className="flex w-full items-center justify-center border border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-700 bg-gray-50">
        <div className="mx-auto flex items-center gap-x-3">
          <span className="md:inline">
          <MdFiberNew className="w-5 h-5 fill-gray-500 dark:fill-gray-600"/>
          </span>
          <p className="text-sm font-medium text-gray-900 dark:text-white md:my-0">
            Tailwind Developer Portfolio Template is Out Now.
            <Badge
              href="#" color="gray" size="sm"
              className="ml-2 inline-flex items-center "
            >
              Check it out!
            </Badge>
          </p>
        </div>
        {/* <Banner.CollapseButton
          color="gray"
          className="text-gray-400 border-0 bg-transparent px-0 [&>span]:px-2 enabled:hover:bg-gray-200 enabled:hover:text-gray-900 dark:enabled:hover:bg-gray-600 dark:enabled:hover:text-white"
        >
          <HiX className="h-5 w-5" />
        </Banner.CollapseButton> */}
      </div>
    </Banner>
  );
};

export default AnnouncementBanner;
