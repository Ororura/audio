interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: {
    data: string;
    id: number;
    name: string;
  };
  rate: number;
}

interface SendData {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rate: number;
  file: FileList;
}

export type { IProduct, SendData };