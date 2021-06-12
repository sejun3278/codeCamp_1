
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1963px;
`;

export const MainBackground = styled.div`
  width: 100%;
  height: 560px;
  z-index: -1;
  background-image: url('/images/map/background.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 10rem;
`;

export const Map = styled.div`
    width: 95%;
    height: 220px;
    border: 1px solid lightgray;
`

export const DetailWrapper = styled.div`
  width: 1200px;
  padding: 2.5rem;
`

export const MapInfoWrapper = styled.div`
    display: flex;
    width: 1200px;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

export const FlexWrapper = styled.div`
  display: flex;
`

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

export const Name = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 1.5rem;
`

export const Info = styled.p`
    font-size: 1.5rem;
    padding-left: 1.5rem;
`

export const InfoSub = styled.p`
    font-size: 1rem;
    padding-left: 1.5rem;
    padding-top: 0.5rem;
`

export const MapWrapper = styled.div`
  border: 1px solid lightgray;
`
