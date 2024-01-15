import ItemEntity from "../entities/ItemEntity";

interface ItemRepository {
  fetchItems(): Promise<ItemEntity[]>;
  fetchItem(id: number): Promise<ItemEntity>;
}

export default ItemRepository;
