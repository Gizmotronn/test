import { useState } from 'react'
import Portal from './Portal'

export default function Modal(props) {
  const [open, setOpen] = useState(props.showModal)
  const { route } = props

  return (
    <>
      {route === '/' && open && (
        <Portal selector='#modal'>
          <div
            style={{
              position: 'fixed',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <div
              style={{
                width: '30%',
                backgroundColor: '#ffffff',
              }}
            >
              <p style={{ color: '#ffffff' }}>This modal is rendered using portals .</p>
              <button type='button' onClick={() => setOpen(false)}>
                Close Modal
              </button>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}
