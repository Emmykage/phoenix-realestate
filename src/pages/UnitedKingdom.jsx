import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAssets } from '../redux/actions/assets'
import { NavLink } from 'react-router-dom'

const UnitedKingdom = () => {
  const dispatch = useDispatch()
  const {offers} = useSelector(state => state.assets)
  const unitedKingdomCategory = offers.filter((asset) => asset.city == "United Kingdom")
  useEffect(()=> {

    dispatch(getAssets())

  },[])


  return (
    <div>
        

    </div>
  )
}

export default UnitedKingdom