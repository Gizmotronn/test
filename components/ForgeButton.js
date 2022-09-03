import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import ForgeGlobe from './ForgeGlobe'
import ForgeMessageModal from './ForgeMessageModal'
import { useState } from 'react'

const ForgeButton = (props) => {
  const [transactionPending, setTransactionPending] = useState(false)
  const { forge, size, showModal = false } = props

  const router = useRouter()
  const { route } = router

  return (
    <>
      <ForgeGlobe forge={forge} />
    </>
  )
}

export default ForgeButton
