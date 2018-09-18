interface Content {
  type: string;
  rules: string[];
}

export interface ShopRules {
  title: string;
  content: Content[];
}
