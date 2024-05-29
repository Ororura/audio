"use client";
import { FC } from "react";
import Product from "@/entity/product/ui/Product";
import styles from "./ProductWidget.module.css";

const ProductWidget: FC = () => {
  return (
    <div className={styles.ProductWrapper}>
      <Product></Product>
    </div>
  );
};

export { ProductWidget };
