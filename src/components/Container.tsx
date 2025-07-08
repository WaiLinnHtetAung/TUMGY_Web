import { ContainerType } from '../types/generalTypes'

const Container = ({children, className, isNav}: ContainerType) => {
  return (
    <div className={`w-full lg:max-w-screen-xl px-3 2xl:px-0 mx-auto ${isNav ? 'my-0' : 'mt-32'} ${className}`}>
      {children}
    </div>
  )
}

export default Container
