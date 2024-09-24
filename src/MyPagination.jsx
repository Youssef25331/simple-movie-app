import { useState } from "react";
import { Pagination } from "react-bootstrap";

export default function MyPagination({ page, lastPage, handlePage }) {
  const [inputMode, setInputMode] = useState(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handlePage(e.target.value);
    } else if (e.key === "Escape") {
      setInputMode(false);
    }
  };

  function generatePagination(num) {
    const pagination = [];

    const makePagination = (paginationNum) => {
      for (let i = 1; i <= paginationNum; i++) {
        pagination.push(
          <Pagination.Item
            active={page == i}
            key={i}
            onClick={() => handlePage(i)}
          >
            {i}
          </Pagination.Item>,
        );
      }
    };

    if (num <= 5) {
      makePagination(num);
    } else {
      const lastPages = [lastPage - 2, lastPage - 1, lastPage];

      const currentPages = !(parseInt(page) >= lastPage - 3)
        ? [page - 2, page - 1, page - 0]
        : [lastPage - 5, lastPage - 4, lastPage - 3];

      if (parseInt(page) <= 3) {
        makePagination(3);
      } else {
        pagination.push(
          parseInt(page) >= lastPage - 3 ? (
            inputMode ? (
              <Pagination.Item as="li">
                <input
                  type="number"
                  onKeyUp={(e) => handleKeyPress(e)}
                  style={{ width: "50px", height: "24px" }}
                />
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis onClick={() => setInputMode(true)} />
            )
          ) : null,
        );
        currentPages.map((p) =>
          pagination.push(
            <Pagination.Item
              active={page == p}
              key={p}
              onClick={() => handlePage(p)}
            >
              {p}
            </Pagination.Item>,
          ),
        );
      }

      pagination.push(
        !(parseInt(page) >= lastPage - 3) ? (
          inputMode ? (
            <Pagination.Item as="li">
              <input
                type="number"
                onKeyUp={(e) => handleKeyPress(e)}
                style={{ width: "50px", height: "24px" }}
              />
            </Pagination.Item>
          ) : (
            <Pagination.Ellipsis onClick={() => setInputMode(true)} />
          )
        ) : null,
      );
      lastPages.map((p) =>
        pagination.push(
          <Pagination.Item
            active={page == p}
            key={p}
            onClick={() => handlePage(p)}
          >
            {p}
          </Pagination.Item>,
        ),
      );
    }
    return pagination;
  }

  return lastPage < 5 ? (
    <Pagination>
      <Pagination.First onClick={() => handlePage(1)} />
      <Pagination.Prev onClick={() => handlePage(parseInt(page) - 1)} />
      {generatePagination(5)}
      <Pagination.Next onClick={() => handlePage(parseInt(page) + 1)} />
      <Pagination.Last onClick={() => handlePage(lastPage)} />
    </Pagination>
  ) : (
    <Pagination>
      <Pagination.First onClick={() => handlePage(1)} />
      <Pagination.Prev onClick={() => handlePage(parseInt(page) - 1)} />
      {generatePagination(lastPage)}
      <Pagination.Next onClick={() => handlePage(parseInt(page) + 1)} />
      <Pagination.Last onClick={() => handlePage(lastPage)} />
    </Pagination>
  );
}
