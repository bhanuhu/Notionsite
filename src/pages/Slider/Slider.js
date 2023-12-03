import React from 'react'
import { calendar, gallery, list, timeline } from '../../images/images'

const Slider = () => {
    return (
        <div><div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={list} class="d-block w-100" alt="..." height="550px" />
                    <p>Community meet-up in Tokyo</p>
                </div>
                <div class="carousel-item">
                    <img src={gallery} class="d-block w-100" alt="..." height="550px" />
                    <p>Notion ambassador event in New York</p>
                </div>
                <div class="carousel-item">
                    <img src={calendar} class="d-block w-100" alt="..." height="550px" />
                    <p>Sharing Notion setups in San Francisco</p>
                </div>
                <div class="carousel-item">
                    <img src={timeline} class="d-block w-100" alt="..." height="550px" />
                    <p>Coffee pop-up in London</p>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div></div>
    )
}

export default Slider