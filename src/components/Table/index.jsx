import React from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination
} from 'react-table';
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/solid';
import { Button, PageButton } from './shared/Button';
import { SortIcon, SortUpIcon, SortDownIcon } from './shared/Icons';
import { useMode } from 'ModeContext';

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label className="flex items-baseline gap-x-2">
      <span className="text-gray-700">Search: </span>
      <input
        type="text"
        className="p-3 border bg-black border-[#6E7A8A] shadow-sm rounded-xl focus:border-indigo-300 "
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </label>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render }
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <label className="flex items-baseline gap-x-2">
      <span className="text-gray-700">{render('Header')}: </span>
      <select
        className="border-gray-300 shadow-sm rounded-xl focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function Table({ columns, data, title }) {
  const { mode } = useMode();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination // new
  );

  return (
    <div className='flex flex-col dark:bg-[#000000] rounded-[15px] p-8'>
      <div className="flex sm:gap-x-2 justify-between">
        {
          title && title === 'position' ?
            <div className='flex flex-row items-center gap-2'>
              <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_532_7955)">
                  <path d="M36 0H4C1.79086 0 0 1.79086 0 4V24C0 26.2091 1.79086 28 4 28H36C38.2091 28 40 26.2091 40 24V4C40 1.79086 38.2091 0 36 0Z" fill="#0084C9"/>
                  <g clip-path="url(#clip1_532_7955)">
                  <path d="M30.1 12.6096H24.97C24.65 12.6096 24.4 12.8596 24.4 13.1796V14.3696H20.41V14.0496C20.41 13.7296 20.16 13.4796 19.84 13.4796H14.71C14.39 13.4796 14.14 13.7296 14.14 14.0496V15.1196H9.57C9.25 15.1196 9 15.3696 9 15.6896V20.9096C9 21.2296 9.25 21.4796 9.57 21.4796H30.1C30.42 21.4796 30.67 21.2296 30.67 20.9096V13.1496C30.67 12.8496 30.42 12.5996 30.1 12.5996V12.6096ZM10.14 16.2596H14.13V20.3396H10.14V16.2596ZM15.27 15.6896V14.6196H19.26V20.3696H15.27V15.6896ZM20.4 15.5096H24.39V20.3696H20.4V15.5096ZM29.53 20.3696H25.54V13.7596H29.53V20.3696Z" fill="black"/>
                  <path d="M12.1498 13.2302C13.1798 13.2302 13.9998 12.4102 13.9998 11.3802L15.7998 10.8102C16.1398 11.2702 16.6698 11.5902 17.2798 11.5902C17.9898 11.5902 18.5998 11.1802 18.8998 10.5902L20.5898 10.8602C20.7298 11.7502 21.4798 12.4302 22.4098 12.4302C23.4398 12.4302 24.2598 11.6102 24.2598 10.5802V10.5602L26.0798 9.94023C26.4198 10.4002 26.9498 10.6902 27.5598 10.6902C28.5898 10.6902 29.4098 9.87023 29.4098 8.84023C29.4098 7.81023 28.5898 6.99023 27.5598 6.99023C26.5298 6.99023 25.7098 7.81023 25.7098 8.84023V8.86023L23.8898 9.48023C23.5498 9.02023 23.0198 8.73023 22.4098 8.73023C21.6998 8.73023 21.0898 9.14023 20.7898 9.73023L19.0798 9.46023C18.9398 8.57023 18.1898 7.89023 17.2598 7.89023C16.2298 7.89023 15.4098 8.71023 15.4098 9.74023L13.6098 10.3102C13.2698 9.85023 12.7398 9.53023 12.1298 9.53023C11.0998 9.53023 10.2798 10.3502 10.2798 11.3802C10.2998 12.4102 11.1198 13.2302 12.1498 13.2302ZM27.5198 8.14023C27.9098 8.14023 28.2298 8.46023 28.2298 8.85023C28.2298 9.24023 27.9098 9.56023 27.5198 9.56023C27.1298 9.56023 26.8098 9.24023 26.8098 8.85023C26.8298 8.46023 27.1298 8.14023 27.5198 8.14023ZM22.4098 9.90023C22.7998 9.90023 23.1198 10.2202 23.1198 10.6102C23.1198 11.0002 22.7998 11.3202 22.4098 11.3202C22.0198 11.3202 21.6998 11.0002 21.6998 10.6102C21.6998 10.2202 21.9998 9.90023 22.4098 9.90023ZM17.2798 9.03023C17.6698 9.03023 17.9898 9.35023 17.9898 9.74023C17.9898 10.1302 17.6698 10.4502 17.2798 10.4502C16.8898 10.4502 16.5698 10.1302 16.5698 9.74023C16.5698 9.35023 16.8698 9.03023 17.2798 9.03023ZM12.1498 10.6702C12.5398 10.6702 12.8598 10.9902 12.8598 11.3802C12.8598 11.7702 12.5398 12.0902 12.1498 12.0902C11.7598 12.0902 11.4398 11.7702 11.4398 11.3802C11.4398 10.9902 11.7398 10.6702 12.1498 10.6702Z" fill="black"/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_532_7955">
                    <rect width="40" height="28" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_532_7955">
                    <rect width="21.67" height="14.48" fill="white" transform="translate(9 7)"/>
                  </clipPath>
                </defs>
              </svg>
              <p className='text-[14px] font-semibold dark:text-white'>My Positions</p>
            </div>
            :
            title && title === 'trading' ?
              <div className='flex flex-row items-center gap-2'>
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_532_9721)">
                    <path d="M36 0H4C1.79086 0 0 1.79086 0 4V24C0 26.2091 1.79086 28 4 28H36C38.2091 28 40 26.2091 40 24V4C40 1.79086 38.2091 0 36 0Z" fill="#0084C9"/>
                    <g clip-path="url(#clip1_532_9721)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.72C13 6.77 13.77 6 14.72 6H23.14C24.09 6 24.86 6.77 24.86 7.72V12.87C24.86 13.13 24.65 13.34 24.39 13.34C24.13 13.34 23.92 13.13 23.92 12.87V7.72C23.92 7.29 23.57 6.94 23.14 6.94H14.72C14.29 6.94 13.94 7.29 13.94 7.72V18.32C13.94 18.75 14.29 19.1 14.72 19.1H18.93C19.19 19.1 19.4 19.31 19.4 19.57C19.4 19.83 19.19 20.04 18.93 20.04H14.72C13.77 20.04 13 19.27 13 18.32V7.72ZM15.49 9.59C15.49 9.33 15.7 9.12 15.96 9.12H21.88C22.14 9.12 22.35 9.33 22.35 9.59C22.35 9.85 22.14 10.06 21.88 10.06H15.96C15.7 10.06 15.49 9.85 15.49 9.59ZM15.96 13.48C15.7 13.48 15.49 13.69 15.49 13.95C15.49 14.21 15.7 14.42 15.96 14.42H20.79C21.05 14.42 21.26 14.21 21.26 13.95C21.26 13.69 21.05 13.48 20.79 13.48H15.96ZM15.49 11.77C15.49 11.51 15.7 11.3 15.96 11.3H21.88C22.14 11.3 22.35 11.51 22.35 11.77C22.35 12.03 22.14 12.24 21.88 12.24H15.96C15.7 12.24 15.49 12.03 15.49 11.77ZM15.96 15.67C15.7 15.67 15.49 15.88 15.49 16.14C15.49 16.4 15.7 16.61 15.96 16.61H19.17C19.43 16.61 19.64 16.4 19.64 16.14C19.64 15.88 19.43 15.67 19.17 15.67H15.96ZM23.76 15.04C22.12 15.04 20.8 16.37 20.8 18C20.8 19.63 22.13 20.96 23.76 20.96C25.39 20.96 26.72 19.63 26.72 18C26.72 16.37 25.39 15.04 23.76 15.04ZM19.86 18.01C19.86 15.86 21.61 14.11 23.76 14.11C25.91 14.11 27.66 15.86 27.66 18.01C27.66 20.16 25.91 21.91 23.76 21.91C21.61 21.91 19.86 20.16 19.86 18.01ZM24.23 16.45C24.23 16.19 24.02 15.98 23.76 15.98C23.5 15.98 23.29 16.19 23.29 16.45V18.13C23.29 18.3 23.39 18.46 23.54 18.54L25.1 19.35C25.33 19.47 25.61 19.38 25.73 19.15C25.85 18.92 25.76 18.64 25.53 18.52L24.22 17.84V16.44L24.23 16.45Z" fill="black"/>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_532_9721">
                      <rect width="40" height="28" fill="white"/>
                    </clipPath>
                    <clipPath id="clip1_532_9721">
                      <rect width="14.66" height="15.9" fill="white" transform="translate(13 6)"/>
                    </clipPath>
                  </defs>
                </svg>

                <p className='text-[14px] font-semibold dark:text-white'>Trading History</p>
              </div> : <div></div>
        }
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="mt-2 sm:mt-0" key={column.id}>
                {column.render('Filter')}
              </div>
            ) : null
          )
        )}
      </div>
      {/* table */}
      <div className="flex flex-col mt-4">
        <div className=" overflow-x-visible">
          <div className="inline-block min-w-full py-2 align-middle">
            <div
              className={`overflow-hidden 
               sm:rounded-2xl`}
            >
              <table {...getTableProps()} className="min-w-full">
                <thead className="text-center text-white bg-[#99CFEB] dark:bg-[#181F23]">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          scope="col"
                          className="p-6 text-xs font-medium tracking-wider text-left text-white uppercase group"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          <div className="flex items-center">
                            {column.render('Header')}
                            {/* Add a sort direction indicator */}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <SortDownIcon className="w-4 h-4 text-white" />
                                ) : (
                                  <SortUpIcon className="w-4 h-4 text-white" />
                                )
                              ) : (
                                <SortIcon className="w-4 h-4 text-white opacity-0 group-hover:opacity-100" />
                              )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className={`${
                    mode
                      ? 'bg-[#000000] text-[#B0B5BC] divide-[#263238]'
                      : 'bg-white text-gray-700 divide-gray-200'
                  } divide-y`}
                >
                  {page.map((row, i) => {
                    // new
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 whitespace-nowrap"
                              role="cell"
                            >
                              {cell.column.Cell.name === 'defaultRenderer' ? (
                                <div
                                  className={`text-sm ${
                                    mode ? 'text-white' : 'text-gray-700'
                                  }`}
                                >
                                  {cell.render('Cell')}
                                </div>
                              ) : (
                                cell.render('Cell')
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between py-3">
        <div className="flex justify-between flex-1 sm:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-x-2">
            <span className="text-[12px] dark:text-[#B0B5BC]">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{' '}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <label>
              <span className="sr-only">Items Per Page</span>
              <select
                className="block w-full outline-none mt-1 border border-[#263238] rounded-md bg-black"
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <nav
              className="relative z-0 outline-none inline-flex"
              aria-label="Pagination"
            >
              <PageButton
                className="dark:bg-[#000000] border-0"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon
                  className="w-5 h-5 text-[#B0B5BC]"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                className={`dark:bg-[#000000] border-0`}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon
                  className="w-5 h-5 text-[#B0B5BC]"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                className={`dark:bg-[#000000] border-0`}
                onClick={() => nextPage()} 
                disabled={!canNextPage}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon
                  className="w-5 h-5 text-[#B0B5BC]"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                className="dark:bg-[#000000] border-0"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon
                  className="w-5 h-5 text-[#B0B5BC]"
                  aria-hidden="true"
                />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
