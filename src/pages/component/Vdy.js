import React, { Component } from 'react'

export class Vdy extends Component {
  render() {
    return (
      <div>
        <section>
            <div className="container">
                <div className="section_header">
                    <h2>Continue watching</h2>
                    <span></span>
                </div>
                <a href="#" class="view_all">View all</a>   
                <div class="continue_watching_container">
                    <div className="continue_watching_card">
                        <video controls type="video/mp4" src="https://www.youtube.com/watch?v=2QKg5SZ_35I&ab_channel=SonyPicturesEntertainment"></video>
                        <h3>hello</h3>

                    </div>
                    <div className="continue_watching_card">
                        <video controls src="https://www.youtube.com/watch?v=rBxcF-r9Ibs&ab_channel=SonyPicturesEntertainment"></video>
                        <h3>billeElish</h3>
                    </div>
                    <div  className="continue_watching_card"><video controls src="https://www.youtube.com/watch?v=FdeioVndUhs&ab_channel=NITVShorts"></video>
                        <h3>Jumanji</h3>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}

export default Vdy