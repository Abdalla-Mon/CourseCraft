export default function modifyParams(
  searchParams,
  value,
  modifiedParam = "page",
  changePage = false,
  scrollId = "",
) {
  const search = Object.keys(searchParams).map((param) => {
    if (param.includes(modifiedParam)) {
      if (value === "") {
        return null;
      }
      return `${modifiedParam}=${value}`;
    }
    if (changePage && param.includes("page")) {
      return `page=1`;
    }
    return `${param}=${searchParams[param]}`;
  });

  const searchStr = search.join("&") + `#${scrollId}`;

  const newSearch = searchParams[modifiedParam]
    ? `?${searchStr}`
    : `?${modifiedParam}=${value}&${searchStr}`;

  return newSearch;
}
