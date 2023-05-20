import { NavLink } from 'react-router-dom'
import { Avatar, TuristriadaHeading } from '@/common/components'

export const UserNavbar = () => {
  const handleActiveClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-primary' : ''

  return (
    <>
      <div className="w-full bg-navbar/80 px-2">
        <div className="flex flex-col lg:flex-row justify-between items-center text-white font-semibold py-2">
          <TuristriadaHeading width={76} />
          <nav className="grow flex flex-row flex-wrap justify-evenly md:justify-end items-center gap-x-4">
            <NavLink to="/" className={handleActiveClass}>
              Inicio
            </NavLink>
            <NavLink to="/promos" className={handleActiveClass}>
              Promociones
            </NavLink>
            <NavLink to="/curiosities" className={handleActiveClass}>
              ¿Sabías qué?
            </NavLink>
            <NavLink to="/categories" className={handleActiveClass}>
              Categorias
            </NavLink>
            <button>Logout</button>
            <Avatar className="hidden lg:block" />
          </nav>
        </div>
      </div>
    </>
  )
}
