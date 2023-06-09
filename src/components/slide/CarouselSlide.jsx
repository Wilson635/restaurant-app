import React from 'react'

export const CarouselSlide = () => {
    return (
        <>

            <main>

                <div class="slides-container">
                    <div class="slides-inner">
                        <div class="slide">1</div>
                        <div class="slide">2</div>
                        <div class="slide">3</div>
                        <div class="slide">4</div>
                        <div class="slide">5</div>
                        <div class="slide">6</div>
                        <div class="slide">7</div>
                        <div class="slide">8</div>
                        <div class="slide">9</div>
                        <div class="slide">10</div>
                    </div>
                </div>

                <div class="controls">
                    <button id="prevButton">Prev</button>
                    <button id="nextButton">Next</button>
                </div>

            </main>

        </>
    )
}
