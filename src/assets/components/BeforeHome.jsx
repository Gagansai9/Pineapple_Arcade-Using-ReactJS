import React from 'react'
import '../css/card_1.css'
import '../css/category.css'
import '../css/review2.css'
import ctr_img from '../images/cut_the_rope.png'
import gm2_img from '../images/gun_mayhem_2.png'
import pio_img from '../images/paper_io.png'
import hs_img from '../images/happy_snakes.png'
import faw_img from '../images/fire_and_water.png'
import hio_img from '../images/hole_io.png'
import mr_img from '../images/Mr_racer.png'
import Carousel from './CarouselComponent'
function BeforeHome() {
  return (
        <div>
            <center>
                <p>&nbsp;</p>
                <p className="title">Featured Games</p>
                <br />
                <div className="wrapper">
                    <i id="left" className="fa-solid  fas fa-angle-left">
                    </i>
                    <ul className="carousel"> 
                        <li className="card"> 
                            <div className="img"><img src={ctr_img} draggable="false" /></div>
                            <p className="title">Cut the Rope</p>
                            <span>Puzzle</span><br />
                            <a className="play" href="/signin">Play now</a>
                        </li> 
                        <li className="card"> 
                            <div className="img"><img src={gm2_img} draggable="false" /></div> 
                            <p className="title">Gun Mayhem 2</p>
                            <span>Shooting</span><br />
                            <a className="play" href="/signin">Play now</a>
                        </li>
                        <li className="card"> 
                            <div className="img"><img src={pio_img} /></div> 
                            <p className="title">Paper.io</p>
                            <span>Arcade</span><br />
                            <a className="play" href="/signin">Play now</a>
                        </li> 
                        <li className="card"> 
                            <div className="img"><img src={hs_img} /></div> 
                            <p className="title">Happy Snakes</p> 
                            <span>Arcade</span><br />
                            <a className="play" href="/signin">Play now</a>
                        </li> 
                        <li className="card"> 
                            <div className="img"><img src={faw_img} /></div> 
                            <p className="title">Fireboy and Watergirl</p>
                            <span>Puzzle</span><br />
                            <a className="play" href="/signin">Play now</a>
                        </li> 
                        <li className="card">
                            <div className="img"><img src={hio_img} /></div> 
                            <p className="title">Hole.io</p> 
                            <span>Arcade</span><br />
                            <a className="play" href="/signin">Play now</a>
                        </li> 
                        <li className="card">
                            <div className="img"><img src={mr_img} /></div>
                            <p className="title">Mr Racer</p>
                            <span>Racing</span><br />
                            <a className="play" href="/signin">Play now</a>
                        </li>
                    </ul> 
                <i id="right" className="fa-solid fas fa-angle-right"></i>
                <Carousel /> 
            </div>
        </center>
        <section class="category">
        <span class="heading">Choose Category</span>
        <a class="category_box" href="/signin">
            <div class="dark_overlay"></div>
            <div class="category_text action" >Action</div>
        </a>
        <a class="category_box" href="/signin">
            <div class="dark_overlay"></div>
            <div class="category_text adventure">Adventure</div>
        </a>
        <a class="category_box" href="/signin">
            <div class="dark_overlay"></div>
            <div class="category_text racing">Racing</div>
        </a>
        <a class="category_box" href="/signin">
            <div class="dark_overlay"></div>
            <div class="category_text shooting">Shooting</div>
        </a>
        </section>
        <section class="review_1" id="review">
            <div class="container_1">
            <div class="post_1">
            <div class="text_1">Thanks for rating us!</div>
            <div class="edit_1">EDIT</div>
            </div>
            <div class="star-widget">
                <h2>Your Thoughts</h2>
                <input type="radio" name="rate" id="rate-5" />
                <label for="rate-5" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-4" />
                <label for="rate-4" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-3" />
                <label for="rate-3" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-2" />
                <label for="rate-2" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-1" />
                <label for="rate-1" class="fas fa-star"></label>
                <br />
                <form action="/signin">
                    <header></header>
                    <div class="textarea">
                    <textarea cols="30" placeholder="Describe your experience.."></textarea>
                    </div>
                    <div class="text_1">
                    <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div class="bt_1">
                    <button type="submit">Post</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default BeforeHome
