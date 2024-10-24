

"use client";

// import { useRouter } from "next/navigation";
// import { ShowMoreProps } from "@/types";
// import { updateSearchParams } from "@/utils";
// import CustomButton from "./CustomButton";

// const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
//   const router = useRouter();

//   const handleNavigation = () => {
//     const newLimit = (pageNumber + 1) * 10;
//     const newPathname = updateSearchParams("limit", `${newLimit}`);
//     router.push(newPathname);

   
//   };



//   const handleNavigation = () => {
//     console.log('handleNavigation called');
//     console.log('pageNumber:', pageNumber);
//     console.log('isNext:', isNext);
//     const newLimit = (pageNumber + 1) * 10;
//     const newPathname = updateSearchParams("limit", `${newLimit}`);
//     console.log('newPathname:', newPathname);
//     router.push(newPathname);
//   };

//   return (
//     <div className="w-full flex-center gap-5 mt-10">
//       {isNext && (
//         <CustomButton
//           btnType="button"
//           title="Show More"
//           containerStyles="bg-primary-blue rounded-full text-white"
//           handleClick={handleNavigation}
//         />
//       )}
//     </div>
//   );
// };

// export default ShowMore;





import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10; // Calculate new limit
    setLimit(newLimit); // Update limit in parent component
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;