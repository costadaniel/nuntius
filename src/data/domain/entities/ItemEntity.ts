interface ItemEntity {
  by: string;
  dead?: boolean;
  deleted?: boolean;
  descendants?: number;
  id: number;
  kids?: number[];
  parent?: number;
  parts?: number[];
  poll?: number;
  score?: number;
  text?: string;
  time: number; // Unix timestamp
  title?: string;
  type: "comment" | "job" | "poll" | "pollopt" | "story";
  url?: string;
}

export default ItemEntity;
