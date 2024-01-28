import { useEffect } from "react";
import useAsync from "../hooks/useAsync";
import { navbarLinks } from "../libs/constants";
import Skeleton from "../components/skeleton";
import ProductComponent from "../components/ProductComponent";
import AsyncHOC from "../HOC/asyncHOC";

export function ProductsPage() {
  const { loading2, data2, error2, getData2 } = useAsync(
    "products?offset=0&limit=10"
  );
  useEffect(() => {
    getData2();
 
  }, []);

  //console.log("data2:",data2);
  return (
    <div className="flex flex-wrap justify-around ">
      <div className="w-[100%] block text-center my-4">
        <input
          type="search"
          placeholder="Product Name..."
          className="input input-bordered input-warning max-w-xs w-[30%]"
        />
      </div>

      <AsyncHOC loading={loading2}>
        {data2?.data?.map((item) => {
          return <ProductComponent {...item} key={item.id} />;
        })}
      </AsyncHOC>
      <div className="w-[100%] block text-center my-4">
        <div className="join">
          <button className="join-item btn btn-md">1</button>
          <button className="join-item btn btn-md btn-active">2</button>
          <button className="join-item btn btn-md">3</button>
          <button className="join-item btn btn-md">4</button>
        </div>
      </div>
    </div>
  );
}
