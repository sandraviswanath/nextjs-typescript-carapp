


// import { fetchCars } from "@/utils";
// import { HomeProps } from "@/types";
// import { CarCard, ShowMore} from "@/components";

// export default async function Home({ searchParams }: HomeProps) {

//   const params = await searchParams;
//   const allCars = await fetchCars({
//     manufacturer: params.manufacturer || '',
//     year: params.year || 2022,
//     fuel:params.fuel || '',
//     limit: params.limit || 10,
//     model: params.model || '',
//   });

//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

//   return (
//     <main className='overflow-hidden'>
     

//       <div className='mt-12 padding-x padding-y max-width' id='discover'>
//         <div className='home__text-container'>
//           <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
//           <p>Explore out cars you might like</p>
//         </div>

      

//         {!isDataEmpty ? (
//           <section>
//             <div className='home__cars-wrapper'>
//               {allCars?.map((car) => (
//                 <CarCard car={car} />
//               ))}
//             </div>

//             <ShowMore
//               pageNumber={(params.limit || 10) / 10}
//               isNext={(params.limit || 10) > allCars.length}
//             />
//           </section>
//         ) : (
//           <div className='home__error-container'>
//             <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
//             <p>{allCars?.message}</p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { CarCard, ShowMore } from "@/components";

export default function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState([]);
  const [limit, setLimit] = useState(10);
  const [params, setParams] = useState(searchParams); // Initialize params state

  useEffect(() => {
    const fetchCarData = async () => {
      const cars = await fetchCars({
        manufacturer: params.manufacturer || '',
        year: params.year || 2022,
        fuel: params.fuel || '',
        limit: limit,
        model: params.model || '',
      });
      setAllCars(prevCars => [...prevCars, ...cars]);
    };

    fetchCarData();
  }, [params, limit]); // Run effect when params or limit change

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car) => (
                <CarCard key={car.id} car={car} /> // Ensure you have a unique key
              ))}
            </div>

            <ShowMore
              pageNumber={limit / 10}
              isNext={allCars.length < limit} // Adjust condition based on fetched cars
              setLimit={setLimit} // Pass setLimit to ShowMore
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}