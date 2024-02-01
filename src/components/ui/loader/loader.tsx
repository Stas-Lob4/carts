import { BarLoader } from 'react-spinners'

export const Loader = () => {
  const style = {
    top: '60px',
    width: '100%',
  }

  return <BarLoader color={'#8c61ff'} cssOverride={style} speedMultiplier={0.8} />
}
