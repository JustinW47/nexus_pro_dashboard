import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useMode } from 'ModeContext';
import { SpinningCircles } from 'react-loading-icons';
import { useLogout } from 'hooks/useLogout';
import useToast from 'hooks/useToast';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/api'
});

// Set the Authorization header with the token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SelectBox({
  url,
  isIncludedImage,
  query,
  name,
  onChangeHandle,
  defaultValue,
  imageVal,
  label
}) {
  const useSelectBoxQuery = () => {
    const { logout } = useLogout();
    const { showToast } = useToast();

    return {
      ...useQuery({
        queryKey: [query],
        queryFn: async () => {
          const result = await instance.get(`${url}`).catch((err) => {
            console.log(err, 'ERROR');
            if (
              err?.response?.status === 403 ||
              err?.response?.status === 401
            ) {
              showToast('Token is Expired!', 'error');
              logout();
            }
          });
          return result;
        }
      })
    };
  };

  const initialData = useSelectBoxQuery();
  const { mode } = useMode();
  const [selected, setSelected] = useState(
    initialData?.isFetched ? initialData?.data?.data[0] : null
  );

  useEffect(() => {
    if (defaultValue) {
      if (!initialData?.isLoading) {
        let arr = initialData?.data?.data?.filter(
          (item) => item?._id === defaultValue
        );
        setSelected(arr[0]);
        onChangeHandle(arr[0]?._id);
      }
    } else {
      if (!initialData?.isLoading && initialData !== null) {
        setSelected(initialData?.data?.data[0]);
        onChangeHandle(initialData?.data?.data[0]?._id);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData?.isLoading, initialData?.data?.data]);

  if (
    initialData?.isLoading ||
    initialData === null ||
    selected === null ||
    selected === undefined
  )
    return (
      <div className="flex items-center justify-center w-full">
        <SpinningCircles
          stroke="#007bff"
          speed={1.5}
          fill="#007bff"
          width={30}
          height={30}
        />
      </div>
    );

  return (
    <div className="w-full">
      <span
        className={`  text-base font-medium ${
          mode ? 'text-[#ffffff]' : 'text-[#5F5F5F]'
        }`}
      >
        {label}
      </span>
      <Listbox
        value={selected}
        onChange={(v) => {
          setSelected(v);
          onChangeHandle(v._id);
        }}
      >
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button
                className={`relative w-full py-2 pl-3 pr-10 text-left border border-gray-400 rounded-md shadow-sm cursor-default text-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm ${
                  mode ? 'bg-[#042433]' : 'bg-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {isIncludedImage && selected[imageVal] && (
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${selected[imageVal]}`}
                      alt=""
                      className="flex-shrink-0 w-6 h-6 rounded-full"
                    />
                  )}
                  <span className="block truncate text-neutral-400">
                    {selected?.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDownIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              {initialData?.isFetched ? (
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-gray-300 border border-gray-400 rounded-md shadow-lg text-neutral-400 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {initialData?.data?.data?.map((item) => {
                      return (
                        <Listbox.Option
                          key={item._id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'text-white bg-blue-400'
                                : 'text-gray-700',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={item}
                        >
                          {({ selected, active }) => {
                            return (
                              <>
                                <div className="flex items-center space-x-2">
                                  {isIncludedImage && (
                                    <img
                                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${item[imageVal]}`}
                                      alt=""
                                      className="flex-shrink-0 w-6 h-6 rounded-full"
                                    />
                                  )}
                                  <span
                                    className={classNames(
                                      selected
                                        ? 'font-semibold'
                                        : 'font-normal',
                                      'block truncate'
                                    )}
                                  >
                                    {item.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-blue-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            );
                          }}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
