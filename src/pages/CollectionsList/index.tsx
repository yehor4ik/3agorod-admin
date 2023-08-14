import {FC} from "react";
import {CollectionRotes} from "../../navigation/CollectionRotes.tsx";
import {CollectionLayout} from "../../navigation/CollerctionLayout.tsx";

export const CollectionList: FC = () => {
  return (
    <div className="collection-list">
      <div className='collection-list__header'>
        <CollectionLayout />
      </div>

      <CollectionRotes />
    </div>
  )
}