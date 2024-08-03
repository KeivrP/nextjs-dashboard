import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { montserrat } from '../font';
import { invoices, customers } from '../../lib/placeholder-data'
export default async function LatestInvoices() {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${montserrat.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex h-10 grow flex-col justify-between rounded-xl bg-gray-50 p-4 overflow-y-auto">
        {/* NOTE: Uncomment this code in Chapter 7 */}

        <div className="bg-white px-6">
          {invoices.map((invoice, i) => {
            const dd = customers.find((a) => a.id === invoice.customer_id)
            return (
              <div
                key={invoice.customer_id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={dd?.image_url ?? ''}
                    alt={`${dd?.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {dd?.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {dd?.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${montserrat.className} truncate text-sm font-medium md:text-base`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
      </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
    </div>
  );
}
