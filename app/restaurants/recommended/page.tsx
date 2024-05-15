import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurant-item";
import { authOptions } from "@/app/_lib/auth";
import { db } from "@/app/_lib/prisma";
import { getServerSession } from "next-auth";

const RecommendedRestaurants = async () => {
  const session = await getServerSession(authOptions);
  const userFavoriteRestaurants = await db.userFavoriteRestaurant.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      restaurant: true,
    },
  });
  const restaurants = await db.restaurant.findMany({});

  return (
    <>
      <Header />
      <div className="container mx-auto ">
        <h2 className="mb-6 pt-5 text-lg font-semibold">
          Restaurantes Recomendados
        </h2>
        <div className="grid grid-cols-2 gap-x-20 gap-y-4 overflow-x-hidden py-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
          {restaurants.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              userFavoriteRestaurants={userFavoriteRestaurants}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendedRestaurants;
