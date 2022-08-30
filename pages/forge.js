import styled from '@emotion/styled'
import Fountain from '../components/Fountain'

export default function Forge() {
  // 👇 min size @ 1024px
  const fountainSize = '486px' // 486px

  const nftAvailability = '750/999'

  return (
    <LandingContainer>
      <FountainContainer>
        <RelativeContainer>
          <AvailabilityContainer>
            <Availability>{nftAvailability}</Availability>
          </AvailabilityContainer>
          <Fountain fountainSize={fountainSize} />
        </RelativeContainer>
      </FountainContainer>
    </LandingContainer>
  )
}

const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 1023px) {
    display: none;
  }
`

const FountainContainer = styled.div`
  display: 'flex';
  justify-content: flex-end;
  align-items: center;
  background: inherit;
`

const RelativeContainer = styled.div`
  position: relative;
`

const AvailabilityContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -55%;
  transform: translate(-50%, -50%);
  background: inherit;
`

const Availability = styled.p`
  color: #ffffff;
  font-size: 32px;
  text-align: left;
`
