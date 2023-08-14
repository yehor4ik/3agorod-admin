import {FC} from "react";
import {ProductLayout} from "../../navigation/ProductLayout.tsx";
import {ProductsRotes} from "../../navigation/ProductRotes.tsx";

export const ProductsList: FC = () => {
  return (
    <div className="products-list">
      <div className='products-list__header'>
        <ProductLayout />
      </div>

      <ProductsRotes />
    </div>
  )
}