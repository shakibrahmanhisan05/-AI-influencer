import { useMemo } from 'react';

function filterByOrgAccess(items = []) {
  return items.reduce((acc, item) => {
    if (item?.access?.requireOrg) {
      return acc;
    }

    const nextItem = { ...item };
    if (Array.isArray(nextItem.items) && nextItem.items.length > 0) {
      nextItem.items = filterByOrgAccess(nextItem.items);
    }

    acc.push(nextItem);
    return acc;
  }, []);
}

export function useFilteredNavItems(items = []) {
  return useMemo(() => filterByOrgAccess(items), [items]);
}
