import { Outlet } from "react-router-dom"
import Footer from "../Components/UI/Footer"
import Navbar from "../Components/UI/Navbar"
import Layout from "../Components/UI/Layout"
import Modal from "../Components/UI/Modal"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addToLocalStorage } from "../localStorage"
import { calculateTotalPrice } from "../Features/cartSlice"

const Root = () => {
  const { isModalOpen } = useSelector((state) => state.modal)
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    addToLocalStorage(cart.items)
    dispatch(calculateTotalPrice())
  }, [cart.items, dispatch])

  return (
    <main className="relative">
      {isModalOpen && <Modal />}
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </main>
  )
}
export default Root