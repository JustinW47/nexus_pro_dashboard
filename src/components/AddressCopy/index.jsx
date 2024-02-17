import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const AddressCopy = ({ address }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const truncatedAddress =
    address.substring(0, 6) + '....' + address.substring(address.length - 3);

  return (
    <div>
      <div className="relative py-2 cursor-pointer group">
        {!copied && (
          <div className="absolute invisible px-4 py-2 mb-3 text-sm text-center text-black bg-white rounded-md bottom-12 group-hover:visible w-52">
            <p className="text-gray-600  leading-2">
              {' '}
              <div className="relative w-full text-gray-600 bg-white rounded">
                Copy to clipboard!
              </div>
            </p>
            <svg
              className="absolute z-10  bottom-[-10px] "
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
            </svg>
          </div>
        )}
        <span className="underline hover:cursor-pointer">
          <div className="relative inline-block cursor-pointer">
            <div className="relative rounded-md">
              <CopyToClipboard text={address} onCopy={handleCopy}>
                <button
                  className={` text-blue-400 py-2 px-4 flex items-center rounded-full ${
                    copied ? 'bg-blue-100' : ''
                  }`}
                >
                  <span className="text-lg font-semibold ">
                    {truncatedAddress}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="inline-block w-6 h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                    />
                  </svg>
                  {copied ? 'Copied!' : ''}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default AddressCopy;
