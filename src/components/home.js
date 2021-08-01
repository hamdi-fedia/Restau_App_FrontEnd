import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenu } from '../actions/actionMenu'
import '../App.css'
import Apropos from './apropos'
import Corouselresto from './carouselresto'
import FooterRestau from './footer'
import Plats from './plats'
import Special from './special'

export default function Menus() {

     const dispatch = useDispatch()
     const menus = useSelector(state=>state.servicestore)


     useEffect(() => {
        dispatch(getMenu());
      },[]);
      console.log(menus, "did we ?");

    return (
        <div>

            <Corouselresto/>
            <Apropos/>
           

<div className="bg-plats" >
         <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="section-top">
                        <h3 className="title-apropos"><span class="style-change">we serve</span> <br/>delicious food</h3>
                        <p class="pt-3">They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>
                    </div>
                </div>
            </div>
           <div class="d-flex justify-content-between">
           {menus.map((el,key) => (
            <div>
                <div class="mx-4 ">
                        <div class="food-img">
                            <img src={el.description} class="img-fluid img-card" alt="" />
                        </div>
                        <div class="food-content">
                            <div class="d-flex justify-content-between">
                                <h5>{el.nom}</h5>
                                <span class="style-change">$14.50</span>
                            </div>
                           <div class="row">
                           <div class="col-md-10">
                            <p class="pt-3">Face together given moveth divided form Of Seasons that fruitful.</p>
                            </div>
                            <div class="col-md-2 mt-4 ">
                            <a href="#" class="temp-btn "><i class="fas fa-shopping-cart"></i></a>
                            </div>
                           </div>
                        </div>
                </div>
            </div>
            ))}
           </div>
         </div>
    </div>
     
            
           
           
       <Plats/>
       <Special/>
       <FooterRestau/>
        </div>
    )
}