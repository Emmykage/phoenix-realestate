import React from 'react'

const WithdrawalNotes = () => {
  return (
    <ul>
        <p className='font-medium'> Minimum Withdrawal = £500 via cryptocurrency & £5000 via Bank Wire/Transfer.</p>
        <li className='px-3 font-normal'><p>Ensure that your Withdrawal information is accurate.</p></li>
        <li className='px-3 font-normal'><p> ⁠Withdrawal may be via any of the supported networks: Bank transfer, Bitcoin(BTC), ETH(ER20), USDT (ER20)</p></li>
        <li className='px-3 font-normal'><p> ⁠Blockchain withdrawals typically take 3-5 minutes to process, while Bank Transfers take a minimum of 3-5 working days.</p></li>
    </ul>
   )
}

export default WithdrawalNotes