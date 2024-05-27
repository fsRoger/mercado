"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "@/components/ProductItem";
import { ContentContainer } from "./styles";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", currentPage],
    queryFn: () =>
      fetch(
        `http://localhost:3003/v1/products?page=${currentPage}&rows=${itemsPerPage}&sortBy=id&orderBy=DESC`
      ).then((res) => res.json()),
    enabled: !!currentPage,
  });

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <ContentContainer>
      {data && data.products.map((product, index) => {

        const { qty_stock: qtyStock, ...rest } = product;
        const productWithQtyStock = { ...rest, qtyStock };

        return <ProductItem key={index} product={productWithQtyStock} />;
      })}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </ContentContainer>
  );
}
