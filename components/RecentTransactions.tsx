import React from 'react'

const RecentTransactions = ({
  accounts,
  transactions = [],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  return (
    <section className='recent-transactions'>
      <header className='flex items-center justify-between'>
        <h2 className='recent-transactions0label'>
          Recent Transactions

        </h2>

      </header>
      
    </section>
  )
}

export default RecentTransactions
