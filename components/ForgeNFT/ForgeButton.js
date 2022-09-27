import ForgeGlobe from '../Layout/Forge/ForgeGlobe'
import { useState } from 'react'

const ForgeButton = (props) => {
  const [transactionPending, setTransactionPending] = useState(false)
  const { forge } = props

  return (
    <>
      <ForgeGlobe forge={forge} />
    </>
  )
}

export default ForgeButton
