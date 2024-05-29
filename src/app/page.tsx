"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "@/components/ProductItem";
import { ContentContainer, Pagination, Container, ContainerProduct } from "./styles";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", currentPage],
    queryFn: () =>
      fetch(`http://localhost:3003/v1/products?skip=${(currentPage - 1) * itemsPerPage}&take=${itemsPerPage}`
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
    <>
      <Container>
        <div>
          <ContainerProduct>
            <ContentContainer>
              {data && data.products.map((product: any, index: number) => {
                const transformedProduct = {
                  ...product,
                  qtyStock: product.qty_stock
                };
                return <ProductItem key={index} product={transformedProduct} />;
              })}
            </ContentContainer>
          </ContainerProduct>
        </div>

        <Pagination>
          <button className="pagination "
            onClick={handlePrevPage}
            disabled={currentPage === 1}>
            Anterior
          </button>
          <button className="pagination "
            onClick={handleNextPage}
            disabled={currentPage === 5}>Próximo</button>
        </Pagination>
      </Container>

    </>
  );
}
