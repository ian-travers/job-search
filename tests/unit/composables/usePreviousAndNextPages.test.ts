import usePreviousAndNexpPages from "@/composables/usePreviousAndNextPages";

describe("usePreviousAndNextPages", () => {
  it("calculates page before current one", () => {
    const currentPage = { value: 7 };
    const maxPage = { value: 10 };

    const { previousPage } = usePreviousAndNexpPages(currentPage, maxPage);

    expect(previousPage.value).toBe(6);
  });

  describe("when current page is the first page", () => {
    it("does not provide previous page", () => {
      const currentPage = { value: 1 };
      const maxPage = { value: 10 };

      const { previousPage } = usePreviousAndNexpPages(currentPage, maxPage);

      expect(previousPage.value).toBeUndefined();
    });
  });

  it("calculates page after current one", () => {
    const currentPage = { value: 7 };
    const maxPage = { value: 10 };

    const { nextPage } = usePreviousAndNexpPages(currentPage, maxPage);

    expect(nextPage.value).toBe(8);
  });

  describe("when current page is the last page", () => {
    it("does not provide next page", () => {
      const currentPage = { value: 10 };
      const maxPage = { value: 10 };

      const { nextPage } = usePreviousAndNexpPages(currentPage, maxPage);

      expect(nextPage.value).toBeUndefined();
    });
  });
});
