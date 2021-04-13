import Nav from '../../components/Layouts/Nav'

const DashboardLayout = ({children, ...rest}) => {
  return (
    <div>
      <Nav/>
      {children}
    </div>
  )
}

export default DashboardLayout
